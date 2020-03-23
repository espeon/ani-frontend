var error = [];
const express = require("express");
const rp = require("request-promise");
const request = require("request");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(cors());

function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = myArray.slice(index, index + chunk_size);
    if (tempArray.length != chunk_size - 1) {
      tempArray.push(myChunk);
    }
  }

  return tempArray;
}

//start ip log/lockdown function
const fs = require("fs");
const path = require("path");

let ips = JSON.parse(fs.readFileSync("./ips.json").toString());
let iplog = ips;
const lockdown = false;

//stats viewer, put on top of ip logger cause of quirks with Express
app.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname + "/ips.json"));
});
async function req(url) {
  request(url, function(error, response, body) {
    return new Promise(resolve => {
      let info = JSON.parse(body);
      resolve(info);
    });
  });
}
async function ipLogger(ip) {
  //request cool ip geolocation api
  //honestly i should only request this when i get a new ip but i'm too lazy (TODO)
  request(`http://ip-api.com/json/${ip}?fields=173023`, function(
    error,
    response,
    body
  ) {
    let ipstats = JSON.parse(body);
    if (ipstats.proxy == true) {
      return console.log("proxy ip");
    }
    //console.log(ipstats);
    iplog.stats.pageVisits++;

    //case: new ip
    if (iplog.ips[ip] == undefined) {
      iplog.ips[ip] = {};
      iplog.stats.uniqueIPs++;
    }
    //also case: new ip
    if (iplog.ips[ip].timesVisited == undefined) {
      iplog.ips[ip].timesVisited = 1;
      //time last visited
      iplog.ips[ip].lastVisited = new Date().toJSON();
      //geolocation stats per-ip
      iplog.ips[ip].info = ipstats;
    } else {
      //just about the same here
      //adds one more time visited
      iplog.ips[ip].timesVisited++;
      iplog.ips[ip].lastVisited = new Date().toJSON();
      iplog.ips[ip].info = ipstats;
    }
    //writing to disk for later *>^
    fs.writeFileSync("./ips.json", JSON.stringify(iplog));
    //recalling from disk idk why
    ips = JSON.parse(fs.readFileSync("./ips.json").toString());
  });
}

app.use(function(req, res, next) {
  //stating ip (compares x-forwarded-for and a couple more vars
  //            then splits and trims everything down just in case)
  let ip = (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    ""
  )
    .split(",")[0]
    .trim();
  //pass to ip logger function (logs ips and saves them)
  ipLogger(ip);
  //basic lockdown function, lets no one through except list of ips stated
  //the list of ips go to animelab anyways so it's not really useful rn
  if (lockdown === true) {
    if (ip != "139.28.218.180") {
      console.log("Blocked IP " + ip);
      return res.redirect(401, `https://animelab.com`);
    } else {
      next();
    }
  }
  next();
});

//end ip log/lockdown

const hbs = require("hbs");
hbs.registerPartials(__dirname + "/public/partials/");
//handlebar halper
hbs.registerHelper("makeGrid", function(items, options) {
  var out = "";
  let temp = chunkArray(items, 8);
  temp.forEach(function(temp) {
    let item = "ThioJoe";
    let image =
      "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png";
    let itm = "";
    let img = "";
    let size = [720, 480];
    temp.forEach(function(temp1) {
      item = temp1.title;
      if (temp1.poster_wide == null || temp1.poster_wide.length == 0) {
        console.log(`horizontal poster for ${item} not available`);
      } else {
        image = temp1.poster_wide[temp1.poster_wide.length - 1].source;
      }
      temp1.url = temp1.url.replace("watch", "anime");
      img = `${img}<div><div class="uk-card uk-card-small uk-card-hover uk-card-secondary"><div class="uk-card-media-top"><a href="..${temp1.url}"><img src=${image} alt=""></a></div><div class="uk-card-body"><a class="uk-link-heading uk-text-meta uk-card-title" href="..${temp1.url}?m=latest">${item}</a></div></div></div>`;
    });
    out =
      out +
      '<div class="uk-grid-match uk-text-center uk-child-width-1-2@s uk-child-width-1-4@m" uk-grid>' +
      img +
      "</div>";
  });
  return out;
});

hbs.registerHelper("makeGridAF", function(items, options) {
  var out = "";
  let temp = chunkArray(items, 8);
  temp.forEach(function(array) {
    let item = "ThioJoe";
    let image =
      "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png";
    let itm = "";
    let img = "";
    array.forEach(function(temp1) {
      item = temp1.title;
      if (temp1.thumbnail == null) {
        console.log("hi");
      } else {
        image = temp1.thumbnail;
      }
      temp1.url = `/video/af/${temp1.anime.slug}/episode-${temp1.episode_num}-${temp1.episode.dynamic_id}`;
      img = `${img}<div><div class="uk-card uk-card-small uk-card-hover uk-card-secondary"><div class="uk-card-media-top"><a href="..${temp1.url}"><img src=${image} alt=""></a></div><div class="uk-card-badge uk-label">Ep. ${temp1.episode_num}</div><div class="uk-card-body"><a class="uk-text-center uk-link-heading uk-text-meta uk-card-title" href="..${temp1.url}?m=latest">${item}</a></div></div></div>`;
    });
    out =
      out +
      '<div class="uk-text-center uk-child-width-1-2@s uk-child-width-1-4@m" uk-grid>' +
      img +
      "</div>";
  });
  return out;
});

hbs.registerHelper('html_decoder', function(text) {
  var str = unescape(text).replace(/&amp;/g, '&');

  return str
});

//end handlabar helper

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

//proxy, just in case.
let apiServerHost = "https://wonderfulsubs.com/api/media/playlist";
app.use("/api/media/playlist", function(req, res) {
  if (req.query.type === "segment") {
    var url = apiServerHost + `?type=${req.query.type}&url=${req.query.url}`;
  } else {
    var url =
      apiServerHost +
      `?type=${req.query.type}&quality=${req.query.quality}&slug=${req.query.slug}`;
  }
  console.log(url);
  req.pipe(request(url)).pipe(res);
});

app.use(["/epic/FoFOR71pLXU.m3u8","/epic/FoFOR71pLXU"] , function(req, res) {
  var url = req.query.v.replace(/%/gm, "&");
  var options = {
    url: url,
    headers: {
      "x-requested-with": "XMLHttpRequest",
      "Content-Type": "application/json",
      Cookie:
        "_ga=GA1.2.878999061.1575945926; SESSION=%7B%22userid%22%3A1429%2C%22username%22%3A%22hentaisexvideos%22%2C%22usergroup%22%3A4%2C%22email%22%3A%22i7wjtm%2B6axjvw0au006k%40pokemail.net%22%2C%22nsfw%22%3Afalse%2C%22chrLogging%22%3A1%2C%22mask_episode_info%22%3A0%2C%22blur_thumbnails%22%3A0%2C%22lang%22%3A%22en-US%22%2C%22cover%22%3A%22%22%2C%22title%22%3A%22Member%22%2C%22premium%22%3A1%2C%22auth%22%3A%22OWpleEFPNGI1ZjFzZG5DRlg5dEdyZz09%22%2C%22remember_login%22%3Atrue%7D; __cfduid=d4e0957e5635436f34ceb3b1dc32bb4441579388083; _gid=GA1.2.749937783.1579387908; XSRF-TOKEN=e5ee3eee0ec7dcb5bac6d5bf5bcadbb0; _gat=1",
      Referer: "https://www.wonderfulsubs.com/"
    }
  };
  req.pipe(request(options)).pipe(res);
});

app.use("/api/afv/:id/:item.mp4", function(req, res) {
  var options = {
  'method': 'GET',
  'url': `https://storage-solutions.animefever.tv/streams/${req.params.id}/${req.params.item}.mp4`,
  'headers': {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0',
    'Accept': '*/*',
    'Accept-Language': 'en-GB,en;q=0.5',
    'Referer': 'https://www.animefever.tv/series/14984-interspecies-reviewers/episode/45236-episode-6-you-can-build-the-perfect-golem-girl-but-dont-let-the-girl-you-base-her-off-of-find-out-cum-to-the-land-of-dreams-on-the-light-of-the-will-o-the-wisps',
    'Origin': 'https://www.animefever.tv',
    'Connection': 'keep-alive',
    'If-Modified-Since': 'Sun, 16 Feb 2020 08:56:52 GMT',
    'If-None-Match': '78310a0bc6f705bc879a9effe6dc9232',
    'Cache-Control': 'max-age=0',
    'TE': 'Trailers'
  }
};
  req.pipe(request(options)).pipe(res);
});

app.use("/api/afv/:id/:item.m3u8", function(req, res) {
  var options = {
  'method': 'GET',
  'url': `https://storage-solutions.animefever.tv/streams/${req.params.id}/${req.params.item}.m3u8`,
  'headers': {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0',
    'Accept': '*/*',
    'Accept-Language': 'en-GB,en;q=0.5',
    'Referer': 'https://www.animefever.tv/series/14984-interspecies-reviewers/episode/45236-episode-6-you-can-build-the-perfect-golem-girl-but-dont-let-the-girl-you-base-her-off-of-find-out-cum-to-the-land-of-dreams-on-the-light-of-the-will-o-the-wisps',
    'Origin': 'https://www.animefever.tv',
    'Connection': 'keep-alive',
    'If-Modified-Since': 'Sun, 16 Feb 2020 08:56:52 GMT',
    'If-None-Match': '78310a0bc6f705bc879a9effe6dc9232',
    'Cache-Control': 'max-age=0',
    'TE': 'Trailers'
  }
};
    console.log(options.url)
  req.pipe(request(options)).pipe(res);
});

app.use("/epic/e", function(req, res) {
  var url = req.query.v.replace(/%/gm, "&");
  var options = {
  'method': 'GET',
  'url': url,
  'headers': {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0',
    'Accept': '*/*',
    'Accept-Language': 'en-GB,en;q=0.5',
    'Referer': 'https://aniwatch.me',
    'Origin': 'https://aniwatch.me',
    'Connection': 'keep-alive',
    'If-Modified-Since': 'Sun, 16 Feb 2020 08:56:52 GMT',
    'If-None-Match': '78310a0bc6f705bc879a9effe6dc9232',
    'Cache-Control': 'max-age=1000',
    'TE': 'Trailers'
  }
};
  req.pipe(request(options)).pipe(res);
});

app.get("/ws", (req, res) => {
  let url = `https://www.wonderfulsubs.com/api/v1/media/latest?count=24&type=sub`;
  if (req.query.id === "p") {
    url = `https://www.wonderfulsubs.com/api/v1/media/popular?count=24`;
  }
  if (req.query.p != undefined) {
    console.log("page " + req.query.p);
  }
  if (req.query.q != undefined) {
    url = `https://www.wonderfulsubs.com/api/v1/media/search?options=poster_wide&q=${req.query.q}`;
  }
  rp({
    headers: {
      "x-requested-with": "XMLHttpRequest",
      "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR",
      Referer: "https://www.wonderfulsubs.com/"
    },
    uri: url
  })
    .then(info => {
      let ws = JSON.parse(info).json;
      if (req.query.id === "p") {
        ws.page = true;
      }

      if (req.query.id === "q") {
        ws.page = "q";
        return res.render("search", ws);
      } else {
        res.render("index", ws);
      }
    })
    .catch(err => {
      error.error =
        "Unfortunately, it looks like either our source may be down or something is wrong with our site. You may want to check back later.";
      res.render("404", error);
      console.log(err);
    });
});

app.get(["/", "/af"], (req, res) => {
  let page = 1;
  if (req.query.p != undefined) {
    page = req.query.p;
  }
  let url = `https://animeflix.io/api/episodes/latest?limit=24&page=${page}&type=sub`;
  if (req.query.id === "p") {
    res.redirect(301, `../ws/?id=p`);
  }
  if (req.query.q != undefined) {
    res.redirect(301, `../?q=${req.query.q}`);
  }
  rp({
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
      "content-type": "application/json"
    },
    uri: url
  })
    .then(info => {
      let ws = JSON.parse(info);
      ws.page = ws.meta.current_page;
      ws.fwd = ws.meta.current_page - 1 === 0 ? 0 : 1;
      ws.next = ws.meta.current_page - 1;
      ws.back = ws.meta.current_page >= ws.meta.total ? 0 : 1;
      ws.prev = ws.meta.current_page + 1;
      //console.log(ws.page)
      if (req.query.id === "p") {
        ws.page = true;
      }

      if (req.query.id === "q") {
        ws.page = "q";
        return res.render("search-list", ws);
      } else {
        res.render("animeflix", ws);
      }
    })
    .catch(err => {
      error.error = "Unfortunately, this source couldn't be reached.";
      res.render("404", error);
      console.log(err);
    });
});

app.get("/anime/:series", (req, res) => {
  if (req.query.m === "latest") {
    res.redirect(301, `../video/ws/${req.params.series}?m=latest`);
  } else {
    let series = req.params.series;
    if (req.query.q != undefined) {
      res.redirect(301, `../?q=${req.query.q}`);
    }
    let url = `https://www.wonderfulsubs.com/api/v1/media/series?series=${series}`;
    rp({
      headers: {
        "x-requested-with": "XMLHttpRequest",
        "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR",
        Referer: "https://www.wonderfulsubs.com/"
      },
      uri: url
    })
      .then(info => {
        let ws = JSON.parse(info).json;
        let i = 1;
        ws.page = "";
        ws.poster =
          ws.poster_wide == undefined
            ? ws.poster_tall[ws.poster_tall.length - 1].source
            : ws.poster_wide[ws.poster_wide.length - 1].source;
        for (e = 0; e < ws.seasons.ws.media.length; e++) {
          if (ws.seasons.ws.media[e].type === "episodes") {
            ws.page =
              ws.page +
              `<h3 class="uk-heading-line"><span>${ws.seasons.ws.media[e].title}</span></h3><div class="uk-child-width-expand uk-text-center" uk-grid>`;
            for (i = 0; i < ws.seasons.ws.media[e].episodes.length; i++) {
              ws.page =
                ws.page +
                `<a class="uk-card uk-light uk-padding uk-padding-remove-vertical uk-link-heading" href="../video/ws/${
                  req.params.series
                }/${i + 1}-${e}">${
                  ws.seasons.ws.media[e].episodes[i].episode_number
                }</a>`;
            }
            ws.page = ws.page + "</div>";
          }
        }
        res.render("anime", ws);
      })
      .catch(err => {
        error.error = "Unfortunately, this series can't be found.";
        res.render("404", error);
        console.log(err);
      });
  }
});

app.get("/af/:series", (req, res) => {
  if (req.query.m === "latest") {
    res.redirect(301, `../video/ws/${req.params.series}?m=latest`);
  } else {
    let series = req.params.series;
    if (req.query.q != undefined) {
      res.redirect(301, `../?q=${req.query.q}`);
    }
    let url = `https://animeflix.io/api/anime/detail?slug=${series}&load=wallpapers,genres`;
    rp({
      headers: {
        "x-requested-with": "XMLHttpRequest",
        "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR"
      },
      uri: url
    })
      .then(info => {
        let af = JSON.parse(info).data;
        let url = `https://animeflix.io/api/episodes?anime_id=${af.id}&limit=50&sort=ASC`;
        rp({
          headers: {
            "x-requested-with": "XMLHttpRequest",
            "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR"
          },
          uri: url
        })
          .then(then => {
            let ws = JSON.parse(then);
            let i = 1;
            ws.poster = ws.anime.cover_photo;
            if (af.wallpapers.length > 1) {
              ws.poster =
                af.wallpapers[
                  Math.floor(Math.random() * af.wallpapers.length)
                ].url;
            }
            if (ws.anime.english_title == null) {
              if (ws.anime.alternate_titles != undefined) {
                ws.anime.english_title =
                  ws.anime.alternate_titles[
                    ws.anime.alternate_titles.length > 2 ? 0 : 1
                  ];
              } else {
                ws.anime.english_title = " ";
              }
            }
            ws.page = `<h3 class="uk-heading-line uk-margin-remove-bottom"><span>${ws.anime.title}</span></h3><h3 class="uk-margin-remove-top uk-text-small">${ws.anime.english_title}</h3> <div class="uk-child-width-expand uk-text-center" uk-grid>`;
            let e = 0;
            for (i = 0; i < ws.data.length; i++) {
              ws.page =
                ws.page +
                `<a class="uk-card uk-light uk-padding uk-padding-remove-vertical uk-link-heading" href="/video/af/${ws.anime.slug}/episode-${ws.data[i].episode_num}-${ws.data[i].dynamic_id}">${ws.data[i].episode_num}</a>`;
            }
            ws.page = ws.page + "</div>";
            res.render("anime", ws);
          })
          .catch(err => {
            error.error = "Unfortunately, this page couldn't be found. Sorry.";
            res.render("404", error);
            console.log(err);
          });
      })
      .catch(err => {
        error.error = "Unfortunately, this page couldn't be found. Sorry.";
        res.render("404", error);
        console.log(err);
      });
  }
});

app.get("/video/af/:series/:id", (req, res) => {
  let url = `https://animeflix.io/api/episode?dynamic_id=${
    req.params.id.split("-")[2]
  }&slug=${req.params.series}&episode_num=${req.params.id.split("-")[1]}`;
  rp({
    headers: {
      "x-requested-with": "XMLHttpRequest",
      "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR"
    },
    uri: url
  })
    .then(info => {
      let ainfo = JSON.parse(info);
      let url = `https://animeflix.io/api/videos?episode_id=${ainfo.data.current.id}`;
      rp({
        headers: {
          Host: "animeflix.io",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:70.0) Gecko/20100101 Firefox/70.0",
          Accept: "application/json, text/plain, */*",
          TE: "Trailers"
        },
        uri: url
      })
        .then(anime => {
          let tw = [];
          tw.series = `../af/${ainfo.data.anime.slug}`;
          let anim = JSON.parse(anime);
          tw.title = ainfo.data.anime.title;
          tw.top = `Episode ${ainfo.data.current.episode_num}`;
          tw.ff = 0;
          if (req.query.time != undefined) {
            tw.ff = req.query.time;
          }
          let num = 0;
          let a = 0;
          let sources = [];
          anim.forEach(source => {
            if (source.lang === "dub") {
              num++;
            } else {
              sources.push(
                `<a href="./${req.params.id}/?num=${a}">${source.provider} ${source.type}-${source.resolution} ${source.lang}</a><br>`
              );
              a++;
            }
            return;
          });
          if (anim[req.query.num] == null) {
            req.query.num = 0;
          }
          tw.video = `${anim[req.query.num].file}`;
          if (ainfo.data.next != null) {
            tw.forw = `episode-${ainfo.data.next.episode_num}-${ainfo.data.next.dynamic_id}`;
            tw.fwd = 1;
          }
          if (ainfo.data.prev != null) {
            tw.index = `episode-${ainfo.data.prev.episode_num}-${ainfo.data.prev.dynamic_id}`;
            tw.back = 1;
          }
          tw.page = `Episode ${ainfo.data.current.episode_num}`;
          if (ainfo.data.current.title != null) {
            tw.page = tw.page + ` | ${ainfo.data.current.title}`;
          }
          tw.page = tw.page + `<br>${sources.join(" ")}`;
          let e = 0;
          res.render("video", tw);
        })
        .catch(err => {
          error.error = "Unfortunately, that video couldn't be found.";
          res.render("404", error);
          console.log(err);
        });
    })
    .catch(err => {
      error.error = "Unfortunately, that video couldn't be found.";
      res.render("404", error);
      console.log(err);
    });
});

app.get("/video/ws/:series/", (req, res) => {
  let url = `https://www.wonderfulsubs.com/api/v1/media/series?series=${req.params.series}`;
  rp({
    headers: {
      "x-requested-with": "XMLHttpRequest",
      "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR",
      Referer: "https://www.wonderfulsubs.com/"
    },
    uri: url
  })
    .then(info => {
      let season = 0;
      let anim = JSON.parse(info).json;
      anim.seasons.ws.media.forEach(e => {
        if (e.type === "episodes") {
          season++;
        }
      });
      if (req.query.m === "latest") {
        res.redirect(
          `./${req.params.series}/${
            anim.seasons.ws.media[season - 1].episodes.length
          }-${season - 1}`
        );
      } else {
        res.redirect(301, `../ws/${req.params.series}/1-0`);
      }
    })
    .catch(err => {
      error.error = "Unfortunately, this series can't be found.";
      res.render("404", error);
      console.log(err);
    });
});

app.get("/video/ws/:series/:index-:season", (req, res) => {
  let src = 0;
  let url = `https://www.wonderfulsubs.com/api/v1/media/series?series=${req.params.series}`;
  let uri = `https://www.wonderfulsubs.com/api/v1/media/stream?code=%2Fcms%2Fv2%2FUS%2FM3%2Fcrunchyroll%2Fvideos%2FGR8DN840R%2Fstreams`;
  if (req.query.s != undefined) {
    src = req.query.s;
  }
  rp({
    headers: {
      "x-requested-with": "XMLHttpRequest",
      "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR",
      Referer: "https://www.wonderfulsubs.com/"
    },
    uri: url
  })
    .then(ani => {
      let anim = JSON.parse(ani).json;
      if (
        anim.seasons.ws.media[req.params.season].episodes[req.params.index - 1]
          .sources != undefined
      ) {
        if (
          src >
          anim.seasons.ws.media[req.params.season].episodes[
            req.params.index - 1
          ].sources.length
        ) {
          src = 0;
        }
        uri = `https://www.wonderfulsubs.com/api/v1/media/stream?code=${encodeURIComponent(
          anim.seasons.ws.media[req.params.season].episodes[
            req.params.index - 1
          ].sources[src == 0 ? src : src - 1].retrieve_url
        )}`;
      } else {
        uri = `https://www.wonderfulsubs.com/api/v1/media/stream?code=${encodeURIComponent(
          anim.seasons.ws.media[req.params.season].episodes[
            req.params.index - 1
          ].retrieve_url
        )}`;
      }
      let sources = [];
      let int = 1;
      anim.seasons.ws.media[req.params.season].episodes[
        req.params.index - 1
      ].sources.forEach(source => {
        sources.push(
          `<a href="../${req.params.series}/${req.params.index}-${req.params.season}?s=${int}">${source.source}</a>`
        );
        int++;
      });
      rp({
        headers: {
          "x-requested-with": "XMLHttpRequest",
          "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR"
        },
        uri: uri
      })
        .then(info => {
          let tw = [];
          if (JSON.parse(info).urls[0].captions != undefined) {
            tw.video = JSON.parse(info).urls[0].src;
            tw.subs = JSON.parse(info).urls[0].captions.src;
          } else if (JSON.parse(info).urls[0] === "h") {
            tw.video = JSON.parse(info).urls;
          } else {
            tw.video = JSON.parse(info).urls[0].src;
          }
          if (
            tw.video.includes(
              "https://www.wonderfulsubs.com/api/media/playlist?type=playlist"
            )
          ) {
            tw.video =
              `../epic/FoFOR71pLXU?v=` +
              tw.video.replace(/&/gm, "%") +
              `%quality=hd`;
          }
          tw.ff = 0;
          if (req.query.time != undefined) {
            tw.ff = req.query.time;
          }
          let bk = req.params.index - 1;
          tw.top = `Episode ${req.params.index}`;
          tw.index = `${bk}-${req.params.season}`;
          tw.series = req.params.series;
          let fw = bk + 2;
          tw.back = bk === 0 ? 0 : 1;
          tw.back.num = bk;
          tw.fwd =
            bk + 1 === anim.seasons.ws.media[req.params.season].episodes.length
              ? 0
              : 1;
          tw.forw = `${fw}-${req.params.season}`;
          tw.info = anim;
          tw.title = tw.info.seasons.ws.media[req.params.season].title;
          //pagination
          tw.page = `Now playing Episode ${req.params.index}: <br>${
            anim.seasons.ws.media[req.params.season].episodes[
              req.params.index - 1
            ].title
          } <br>Sources: ${sources.join(", ")} <ul class="uk-card">`;
          let e = 0;
          for (e = 0; e < anim.seasons.ws.media.length; e++) {
            if (anim.seasons.ws.media[e].type === "episodes") {
              tw.page =
                tw.page +
                `<h3 class="uk-heading-line"><span>${anim.seasons.ws.media[e].title}</span></h3><div class="uk-child-width-expand uk-text-center" uk-grid>`;
              for (i = 0; i < anim.seasons.ws.media[e].episodes.length; i++) {
                tw.page =
                  tw.page +
                  `<a class="uk-card uk-padding uk-padding-remove-vertical uk-link-heading uk-text-heading" href="../${
                    req.params.series
                  }/${i + 1}-${e}">${
                    anim.seasons.ws.media[e].episodes[i].episode_number
                  }</a>`;
              }
              tw.page = tw.page + "</div>";
            }
          }
          tw.page = tw.page + "</ul>";
          if (tw.video.includes("xstreamcdn")) {
            res.render("video-mob", tw);
          }
          res.render("video", tw);
        })
        .catch(err => {
          error.error = "Unfortunately, that video couldn't be found.";
          res.render("404", error);
          console.log(err);
        });
    })
    .catch(err => {
      error.error = "Unfortunately, that video couldn't be found.";
      res.render("404", error);
      console.log(err);
    });
});

app.get("/video/fe/:series/:id", (req, res) => {
  let url = `https://www.animefever.tv/api/anime/episode/${req.params.id}`;
  rp({
    headers: {
      "x-requested-with": "XMLHttpRequest",
      "x-access-token": "1rj2vRtegS8Y60B3w3qNZm5T2Q0TN2NR"
    },
    uri: url
  })
    .then(anim => {
      let anime = JSON.parse(anim).data;
      let tw = [];
      tw.series = `../fe/${anime.anime.slug}`;
      tw.title = anime.title;
      tw.top = `Episode ${Math.round(anime.number)}`;
      tw.ff = 0;
      if (req.query.time != undefined) {
        tw.ff = req.query.time;
      }
      let num = 0;
      let a = 0;
      tw.video = anime.stream
      tw.subs = "/epic/FoFOR71pLXU.m3u8?v=" + anime.subtitles[0].file;
    console.log(tw.subs)
      let e = 0;
      res.render("video", tw);
    })
    .catch(err => {
      error.error = "Unfortunately, that video couldn't be found.";
      res.render("404", error);
      console.log(err);
    });
});

app.get("/watch", (req, res) => {
  let tw = [];
  tw.video = `${req.query.v}`;
  tw.index = 1;
  tw.back = 0;
  tw.back.num = tw.index;
  tw.fwd = 0;
  tw.forw = tw.index + 2;
  tw.ff = 0;
  res.render("video", tw);
});

app.get("/listen", (req, res) => {
  let tw = [];
  tw.video = `/epic/FoFOR71pLXU?v=${req.query.a}`;
  tw.index = 1;
  tw.back = 0;
  tw.back.num = tw.index;
  tw.fwd = 0;
  tw.forw = tw.index + 2;
  tw.ff = 0;
  res.render("audio", tw);
});

app.get("/ips", (req, res) => {
  res.json(iplog);
});

app.get("/harmon", (req, res) => {
  res.render("harmon");
});

// And we end with some more generic node stuff -- listening for requests :-)
let listener = app.listen(process.env.PORT, () => {
  console.log(
    "❗ Your app has restarted and is listening on port " +
      listener.address().port
  );
});
