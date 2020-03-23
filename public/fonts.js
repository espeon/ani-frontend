var fonts = function() {
  let availablefonts = {
    "a-otf folk pro":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/476/69a/5c147669a6b28046978367.ttf",
    "fot mathiselegant pro":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/477/3e5/5c14773e53303656070310.ttf",
    "dfgganshinkei-w7":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/477/84c/5c147784cfcab347381193.ttf",
    rosario:
      "https://www.animefever.tv/storage/app/fonts/public/5c1/477/a3e/5c1477a3e56e0516213538.ttc",
    "dfgmarumoji-heavy":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/477/fbb/5c1477fbbdd53141768602.ttf",
    "kozuka gothic pro h":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/478/545/5c147854587ee057430496.ttf",
    "kozuka mincho pr6n-h":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/aca/b67/5c6acab676e97685484189.ttf",
    bettyshand:
      "https://www.animefever.tv/storage/app/fonts/public/5c1/479/720/5c147972006b0103165239.ttf",
    "bell gothic std black":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/479/8dc/5c14798dc3881746787541.otf",
    "epson \u592a\u4e38\u30b4\u30b7\u30c3\u30af\u4f53":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/47a/349/5c147a349328d618861919.ttf",
    "open sans":
      "https://sf.abarba.me/SF-UI-Text-Light.otf",
    "open sans semibold":
      "https://sf.abarba.me/SF-UI-Text-Medium.otf",
    "open sans extrabold":
      "https://sf.abarba.me/SF-UI-Text-Regular.otf",
    garamond:
      "https://www.animefever.tv/storage/app/fonts/public/5c1/47c/c96/5c147cc96bd38494884097.ttf",
    "maiandra gd":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/47d/10c/5c147d10c6469749534715.ttf",
    "kozuka mincho pro b":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/47d/406/5c147d40638b6614548173.otf",
    "brush strokes":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/549/eda/5c1549eda6f35534372911.ttf",
    "kozuka gothic pr6n b":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/558/5d3/5c15585d3ba15097918545.otf",
    hghakushugokubutokaishotai:
      "https://www.animefever.tv/storage/app/fonts/public/5c1/558/de3/5c1558de3ce3d904518844.ttf",
    "a-otf jun pro 34-kami":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/559/248/5c155924800ee363131584.ttf",
    "trebuchet ms":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/cfa/bf2/5c1cfabf23e30241307296.ttc",
    verdana:
      "https://sf.abarba.me/SF-UI-Text-Regular.otf",
    "ms ui gothic":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/cfb/b2c/5c1cfbb2cbe0d672133306.ttc",
    arial:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/6c5/fd9/5cb6c5fd95d2d233590026.ttc",
    "arial black":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/6c5/fd9/5cb6c5fd95d2d233590026.ttc",
    "times new":
      "https://www.animefever.tv/storage/app/fonts/public/5c1/cfc/c1d/5c1cfcc1d21dc262992347.ttc",
    mentone:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/086/af2/5c2086af2d923802459563.otf",
    "kozuka mincho pro h":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/ac9/c17/5c6ac9c17eff2034840200.otf",
    tellural:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/093/818/5c209381807d7714703348.ttc",
    "myriad pro":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/09b/6fe/5c209b6fec340175804145.ttc",
    "myriad pro light":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/09b/6fe/5c209b6fec340175804145.ttc",
    "iwata mincho old pro-fate b":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/25b/6fc/5c225b6fc08b3843342669.ttf",
    "source sans pro semibold":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/25c/148/5c225c1487456211704501.ttc",
    "dfpmarugothic-w6-kami":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/25c/b33/5c225cb333a1c395934397.ttf",
    "gnuolane free":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/25c/c35/5c225cc35e324028212370.ttf",
    "iwata new gothic pro-aw m":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/25c/dd6/5c225cdd64893309680912.ttf",
    llcharlotte:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a3/a08/5c25a3a0812e1794348913.ttf",
    dupree:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a3/ccd/5c25a3ccd0b26215741397.ttf",
    "cartoon toy":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a4/0d6/5c25a40d67bf8381991928.ttf",
    artificessk:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a4/261/5c25a4261e2d4490193882.ttf",
    bolide:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a4/3c1/5c25a43c151fd996913787.ttf",
    painted:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a4/a0c/5c25a4a0c3c40222242233.ttf",
    cheboygan:
      "https://www.animefever.tv/storage/app/fonts/public/5c3/441/b91/5c3441b913718325800327.ttf",
    volkhov:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a6/385/5c25a6385bf79611966104.ttc",
    "brushtiptravis_tcn'd":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a6/8e5/5c25a68e55d23959077004.ttf",
    kbplanetearth:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a6/dd0/5c25a6dd0e131308641259.ttf",
    vegur:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5a7/f6d/5c25a7f6dc545092201241.ttc",
    "set fire to the rain":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5ab/c13/5c25abc131e92873084058.ttf",
    "ag book rounded":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5ac/871/5c25ac871c6d2915030923.ttf",
    brushtiptravis:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5ac/aa8/5c25acaa873f7134437527.ttf",
    "janda curlygirl chunky":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5ac/e05/5c25ace058964860973031.ttf",
    "fot comet std stripped":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5ad/49b/5c25ad49ba468599669619.otf",
    "arial rounded mt bold":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5b0/345/5c25b034530d9825711849.ttf",
    "high tower text":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5b0/63d/5c25b063d4b59466376779.ttf",
    "black metal sans":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/5ea/2ac/5c25ea2acdabc669169803.ttf",
    "syntax lt":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/605/b0a/5c2605b0a12a7895765202.otf",
    "beetype filled":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/607/6fc/5c26076fc7d5f784639600.otf",
    sixgun:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/607/822/5c26078226be9165175280.ttf",
    "adore you":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/607/94c/5c260794c30a1340081074.ttf",
    "franklin gothic medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/607/e85/5c2607e8567f9700843159.ttf",
    "fot-hummingstden-b":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/608/5cd/5c26085cddc35003943200.otf",
    "ruzicka typek":
      "https://www.animefever.tv/storage/app/fonts/public/5e4/245/060/5e4245060692c777816905.ttf",
    "kg turning tables":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/6e0/875/5c26e08755dd9593504680.ttf",
    "matura mt script capitals":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/712/669/5c2712669fd27069871581.ttf",
    kfhimaji:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bf2/755/5cabf27557dbd052521114.otf",
    mikado:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/713/192/5c27131923615449397060.ttc",
    "mikado medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/713/192/5c27131923615449397060.ttc",
    "mercury text g1 semibold sc":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/713/8ea/5c27138eaae98915522108.ttc",
    "hoefler text":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/713/a13/5c2713a131578416990319.ttf",
    "dinpro-regular":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/713/c5b/5c2713c5bd4e7088687866.otf",
    pero:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/714/639/5c2714639765c395108643.ttc",
    "pero extrabold":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/714/639/5c2714639765c395108643.ttc",
    "panton icons c fill":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/714/826/5c27148269447209916269.ttf",
    "kunstler script":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/714/e47/5c2714e470ce1063976637.ttf",
    "grilledcheese btn toasted":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/715/544/5c27155445ace846831809.ttf",
    "franklin gothic book":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/715/fb7/5c2715fb71365367380291.ttc",
    amandarae:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/716/960/5c27169601c9c342369201.ttf",
    chiller:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/721/e1e/5c2721e1eb8d5009545035.ttf",
    vesta:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/abb/32b/5c2abb32b43df737976001.otf",
    "avantgarde bk bt eclipse":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/abb/5ae/5c2abb5ae3b38799234541.ttf",
    "monotype corsiva":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/abb/82c/5c2abb82c6dea878559983.ttf",
    "dfkai-sb":
      "https://www.animefever.tv/storage/app/fonts/public/5e3/ac3/265/5e3ac3265a3a5067812860.ttf",
    eraserdust:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/abb/d47/5c2abbd47d907986438056.ttf",
    "times new roman":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/abc/cb0/5c2abccb06cf6271682237.ttc",
    "throw my hands up in the air":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/abd/c70/5c2abdc7082c5469143449.ttf",
    "formal436 bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/abe/0b4/5c2abe0b49a35372187587.ttf",
    lato:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/c08/0a8/5c2c080a8b3e1092442802.ttc",
    "lato light":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/c08/0a8/5c2c080a8b3e1092442802.ttc",
    "lato black":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/c08/0a8/5c2c080a8b3e1092442802.ttc",
    "ltfinnegan medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/cb0/48a/5c2cb048ad038837057324.ttf",
    "playtime with hot toddies":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/cb0/aa8/5c2cb0aa8cabc868810722.ttc",
    maagkramp:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/cb0/e83/5c2cb0e83f34b367343859.ttf",
    "heiseimarugothic-fractale":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bfe/dd6/5cabfedd631a0026860820.ttf",
    "negotiate free":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f2c/533/5c2f2c5332366812568100.ttf",
    "fot-hummingstd-accel-b":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f2c/6c1/5c2f2c6c1bb85900654312.ttf",
    "itc stone sans std medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f2f/64a/5c2f2f64a37fb213807099.ttc",
    corbel:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f34/6bc/5c2f346bc0ac5042324192.ttc",
    "cantoria mt std semibold":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f32/884/5c2f32884694f422390907.ttc",
    "class-hyouka":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f32/cf8/5c2f32cf8f003768850690.ttf",
    kbsticktoit:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f32/e2b/5c2f32e2b6f20535051207.ttf",
    "marker scribbles":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f32/fce/5c2f32fce9565282810245.otf",
    "black bullet gothic bold":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f33/142/5c2f3314292e7767994589.ttf",
    comfortaa:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f33/277/5c2f33277944a143686121.ttf",
    please:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f33/488/5c2f33488b326248908017.ttf",
    "whatever it takes":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f33/5aa/5c2f335aa948f112210416.ttf",
    "kozuka gothic mikakunin":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f33/7b3/5c2f337b34b7d986020386.ttf",
    "samurai-gosick":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f33/bb2/5c2f33bb2abb9768951457.ttf",
    advent:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f33/cea/5c2f33cea5e08114220710.ttf",
    pixel:
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f35/4d7/5c2f354d78b1c794195702.ttf",
    "raleigh lt":
      "https://www.animefever.tv/storage/app/fonts/public/5c2/f36/66d/5c2f3666d98d1023221083.ttf",
    amienne:
      "https://www.animefever.tv/storage/app/fonts/public/5c3/33e/d8d/5c333ed8d0d0b765481706.ttf",
    "averia serif":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/33f/8e6/5c333f8e63515225904991.ttc",
    "engraversgothic bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/340/18a/5c334018ae208797986658.ttf",
    charme:
      "https://www.animefever.tv/storage/app/fonts/public/5c3/340/310/5c334031071cd562336904.ttf",
    "complete in him":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/340/856/5c3340856d143948075520.ttf",
    franchise:
      "https://www.animefever.tv/storage/app/fonts/public/5c3/43b/417/5c343b41740e3839092306.ttf",
    "fela-regular":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/43b/e52/5c343be52c61c873009191.otf",
    "jenna sue":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/43c/8e5/5c343c8e5351d354514387.ttf",
    "sub clear sans":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/43c/b43/5c343cb43b9b6688707200.ttf",
    "dist inking fxd":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/43c/e32/5c343ce32e818139261366.otf",
    "adobe heiti std r-kami":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/43d/2c8/5c343d2c88ebc680834151.ttf",
    "centralesansrnd extrabold":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/968/8be/5c69688beabb8884979612.ttf",
    "swis721 hv bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/441/763/5c3441763de2d040872957.ttc",
    allthatmatters:
      "https://www.animefever.tv/storage/app/fonts/public/5c3/441/aa4/5c3441aa4c7ee620894959.ttf",
    "dfpleisho-sb":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/442/203/5c3442203db40111640500.ttf",
    "creativeblock pl":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/442/3a8/5c34423a8817f921896198.ttf",
    copybook:
      "https://www.animefever.tv/storage/app/fonts/public/5c3/442/59c/5c344259cbf3b762330975.ttf",
    cambria:
      "https://www.animefever.tv/storage/app/fonts/public/5c3/443/52a/5c344352ac4d7040908101.ttc",
    "gandhi sans":
      "https://sf.abarba.me/SF-UI-Text-Ultrathin.otf",
    "kozuka mincho pro strippedv2 h":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/90b/707/5c390b707cbc0558337193.otf",
    dominican:
      "https://www.animefever.tv/storage/app/fonts/public/5c3/90b/7f7/5c390b7f77204529622328.ttf",
    "bluebrush-normal":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/90b/9a3/5c390b9a30896164213618.ttf",
    "love lettertw":
      "https://www.animefever.tv/storage/app/fonts/public/5c3/90b/bf0/5c390bbf00143781026028.ttf",
    "tisaot-xbold":
      "https://www.animefever.tv/storage/app/fonts/public/5c4/1a8/af2/5c41a8af21a22719893094.ttc",
    "tisaot-xboldita":
      "https://www.animefever.tv/storage/app/fonts/public/5c4/1a8/af2/5c41a8af21a22719893094.ttc",
    "i did this!":
      "https://www.animefever.tv/storage/app/fonts/public/5c9/56f/d70/5c956fd70f903413161033.ttf",
    biondi:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/853/b7b/5c4853b7b5cd8679559712.ttf",
    judson:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/853/d51/5c4853d51a88b088728421.otf",
    enigmatic:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/853/e1d/5c4853e1d1d9e345551268.ttf",
    transit:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/cfe/23e/5c4cfe23efc4f985864390.ttf",
    "liberation sans":
      "https://www.animefever.tv/storage/app/fonts/public/5c4/cfe/dec/5c4cfedec3a20503709006.ttc",
    "modern antiqua":
      "https://www.animefever.tv/storage/app/fonts/public/5c4/cff/033/5c4cff0332746105525749.ttf",
    arsenal:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/cff/729/5c4cff72923ab297698925.ttc",
    sansation:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/d00/4a9/5c4d004a91a31691055544.ttc",
    "sansation light":
      "https://www.animefever.tv/storage/app/fonts/public/5c4/d00/4a9/5c4d004a91a31691055544.ttc",
    "kg begin":
      "https://www.animefever.tv/storage/app/fonts/public/5c4/d00/df3/5c4d00df35c96008997369.ttf",
    "libre baskerville":
      "https://www.animefever.tv/storage/app/fonts/public/5c4/d01/3fb/5c4d013fbfc23680279016.ttc",
    heuristica:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/d01/a04/5c4d01a040394518220068.ttc",
    dosis:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/d02/0f2/5c4d020f297c1862411428.ttc",
    cantarell:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/d02/85b/5c4d0285b2f78123024082.ttc",
    "big fat marker":
      "https://www.animefever.tv/storage/app/fonts/public/5c4/d02/c2a/5c4d02c2aea0a009278793.ttf",
    rolandbecker:
      "https://www.animefever.tv/storage/app/fonts/public/5c4/d02/f62/5c4d02f62ad5a807208056.ttf",
    "luxi sub sans":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0b/4cc/5c5e0b4ccf46f521109941.ttc",
    "poetsen one":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/11e/a84/5c511ea84afce779629677.ttf",
    kabel:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/11e/cb5/5c511ecb53542715341864.ttf",
    "centralesansrnd medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/11f/e21/5c511fe21f73b699221919.ttf",
    "graviola soft medium":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4e/bb3/5d3e4ebb30c8b969690570.ttc",
    "elegant lux mager":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/135/0b5/5c51350b5b3f0761479955.ttf",
    jaapokki:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/137/3cd/5c51373cdb244361732648.ttf",
    monoglyceride:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/137/518/5c5137518d20b363469366.ttf",
    perisphere:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/137/88f/5c513788f2667684313736.ttf",
    "\u3044\u308d\u306f\u30de\u30eb\u307f\u304b\u307f regular":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/139/da9/5c5139da9e267577639974.ttc",
    "cronos pro":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/376/2b8/5c53762b8cada850977593.ttc",
    "cronos pro light":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/376/2b8/5c53762b8cada850977593.ttc",
    "cronos pro light display":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/376/2b8/5c53762b8cada850977593.ttc",
    "aldo the apache":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/376/dee/5c5376deee28f128935665.ttf",
    "adobe caslon pro":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/377/700/5c53777008fb6590709518.ttc",
    "adobe caslon pro bold":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/377/700/5c53777008fb6590709518.ttc",
    "sf hollywood hills":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/377/bf3/5c5377bf3c778443232635.ttf",
    abel:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/4d1/b08/5c54d1b088976304299259.ttf",
    "fansub block":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/60e/a1c/5c560ea1ca03a267777273.ttf",
    "jerry's handwriting":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/60e/b8c/5c560eb8c72cc819575560.ttf",
    "jennifer's hand writing":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/60e/df3/5c560edf3b3af071193440.ttf",
    urlcantmuxandsindalfcantencode:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/60f/00d/5c560f00d79db430839393.ttf",
    "a-otf gothic mb101 pr5 l":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/60f/6c1/5c560f6c1c40f076692196.otf",
    "iwata mincho pro m-kami":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/60f/a92/5c560fa9245bb530745824.ttf",
    bakersignetbt:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/60f/d19/5c560fd191b52003815761.ttf",
    hyouka:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/610/911/5c5610911a26c943779351.ttc",
    "jenkins v2.0":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/610/c9d/5c5610c9d3229074281129.ttf",
    "dk crayon crumble":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/695/7f6/5c56957f6a7f6632566000.ttf",
    "iwata mincho old pro h-fate":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/695/a29/5c5695a29c8d9545009286.ttf",
    "pt sans":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/7a0/d11/5c57a0d11b65e831332067.ttc",
    "teachers student":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/7a1/09a/5c57a109abe00920194187.ttf",
    "calligraph421 bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/7a1/694/5c57a16946755746290290.ttf",
    "mf delicate little flower":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/7a1/88b/5c57a188be593464936434.ttf",
    montara:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/7a1/c3c/5c57a1c3c9a9d970961518.otf",
    "ck marker":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/7a1/e76/5c57a1e766910975504677.ttf",
    "segoe print":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/7de/689/5c57de689a36a135539419.ttf",
    "franklin gothic demi":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/7de/90c/5c57de90c8352479515964.ttf",
    calibri:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/7df/38b/5c57df38b92c3768788500.ttc",
    cabin:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba2/734/5c5ba2734a765233339996.ttc",
    "cabin semibold":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba2/734/5c5ba2734a765233339996.ttc",
    "cabin medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba2/734/5c5ba2734a765233339996.ttc",
    "fot kafu nagomi std stripped":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba2/b14/5c5ba2b146ddb625947923.otf",
    birdie:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba3/465/5c5ba3465a85a257555482.ttf",
    "fot-chiaro std en b":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba3/5e1/5c5ba35e10acb344152686.otf",
    "fot-seurat pro eb":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba3/705/5c5ba370515ce980027443.otf",
    blackjack:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba3/84d/5c5ba384d3cf9047936682.ttf",
    "burst my bubble":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba3/f5b/5c5ba3f5b7fd8699858972.ttf",
    "segoe ui":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba4/770/5c5ba4770574f769727641.ttc",
    "segoe ui semilight":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba4/770/5c5ba4770574f769727641.ttc",
    "eager naturalist":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba4/9b7/5c5ba49b777c2835363209.ttf",
    emilyshand:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba4/b51/5c5ba4b5165fc315305595.ttf",
    alex_bold:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba6/5d9/5c5ba65d95246449162786.ttf",
    "patua one":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba6/d05/5c5ba6d050792397768192.ttf",
    "airstream itc":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/ba6/eca/5c5ba6ecaa2e2777421126.ttf",
    chinacat:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/bed/843/5c5bed843de8b350669601.ttc",
    "efn impresja":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/bed/aee/5c5bedaeec961143046798.ttf",
    bloklettersviltstiftfxd:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/bed/c1c/5c5bedc1c8619019355761.ttf",
    aller:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/bee/417/5c5bee4173bf0916148293.ttc",
    "vtks animal 2":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/bee/626/5c5bee626cd4d026613678.ttf",
    "palatino linotype":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/bee/c8b/5c5beec8babaf525369706.ttf",
    "woodland itc":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/bef/c48/5c5befc48f1bb738035649.ttc",
    "dutch766 bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/bef/f33/5c5beff33d9c5456684307.ttf",
    "brianne's hand":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/bf0/0b5/5c5bf00b5b319614975319.ttf",
    "brush-cut v2":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0b/694/5c5e0b69450b5570523148.ttf",
    "ruach let":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0b/83b/5c5e0b83b5b80911457121.ttf",
    "day roman":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0b/9a7/5c5e0b9a744a4794382240.ttf",
    kronika:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0b/bb6/5c5e0bbb63ce7909423335.ttf",
    "chinela brush":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0b/eab/5c5e0beab8c51843191525.ttf",
    "plane crash":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0c/894/5c5e0c894701b890497863.ttf",
    "kozuka gothic regular noragami":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0c/a71/5c5e0ca71f024029616391.ttf",
    "from where you are":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0c/c76/5c5e0cc76f4e0102743719.ttf",
    "always in my heart":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0c/e31/5c5e0ce31f2a1054795422.ttf",
    "kozukagothicproh-madoka":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0d/073/5c5e0d07303e8751353046.ttf",
    "brush-hyouka":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0d/306/5c5e0d3063e9d483443081.ttf",
    levirebrushed:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0d/594/5c5e0d59483f1381706199.ttf",
    puritan:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0d/890/5c5e0d89054b9988779470.ttf",
    "avant que...":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0e/052/5c5e0e052b8cb292465191.ttf",
    "bd cartoon shout":
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0e/218/5c5e0e21856b1228299810.ttf",
    akbar:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0e/396/5c5e0e396a8f8817622160.ttf",
    lalouzz:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e0e/5bc/5c5e0e5bc02f8754605803.ttf",
    brushed:
      "https://www.animefever.tv/storage/app/fonts/public/5c5/e1e/c0b/5c5e1ec0b00db475276898.ttf",
    "raleigh lt std":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/6fb/021/5c66fb021bd21498378642.ttc",
    "fot rodin pro ub":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/6fb/216/5c66fb2169cb9293422714.ttf",
    johnshand:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/6fb/561/5c66fb5616dae245676635.ttf",
    soolidium:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/88f/43a/5c688f43ac497747608302.ttf",
    "wickenden cafe ndp":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/88f/551/5c688f551b478909652749.ttf",
    "daniel black":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/88f/764/5c688f764f235590082131.ttf",
    handana:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/88f/dac/5c688fdac982d814472030.ttf",
    "light up the world":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/88f/ff1/5c688fff17b69578415914.ttf",
    "tekton pro":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/893/b16/5c6893b16f2a1619176855.ttc",
    neuzeitgrotbla:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/893/f55/5c6893f558e55902851743.ttf",
    constantia:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/894/1f3/5c68941f3888b101219300.ttf",
    "rh sans":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/968/1dc/5c69681dc4a06717456412.ttc",
    "raleigh bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/968/ca8/5c6968ca89743863798008.ttf",
    altonabold:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/968/e16/5c6968e163dd7247488033.otf",
    "advert-bold":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/968/fde/5c6968fded9f7235751325.otf",
    "old english text mt":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/969/597/5c6969597b460179433547.ttf",
    "one off title":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/969/6d5/5c69696d5d50f337186315.ttf",
    scratch:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/969/813/5c69698132f43705151725.ttf",
    "soutane bold":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/969/903/5c69699037863660305910.ttf",
    urwalcuint:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/969/a04/5c6969a043c79878579116.ttf",
    "highway gothic wide":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/969/b1f/5c6969b1f0015530250077.ttf",
    ariston:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/969/c97/5c6969c974c04656186081.ttf",
    splash:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/969/e05/5c6969e05d8e2965433149.ttf",
    lexia:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96a/5d6/5c696a5d6af6f421154824.ttf",
    "sf archery black":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96a/781/5c696a7810069827212937.ttf",
    "embryonic inside-mod":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96a/a4e/5c696aa4eb9f9027591571.ttf",
    "comic sans ms":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96b/0aa/5c696b0aa7ebb196437044.ttc",
    retropop:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96b/244/5c696b244587b002307051.otf",
    "sf junk culture":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96b/4f6/5c696b4f6b257650296601.ttf",
    "blambot pro":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96b/771/5c696b771f28c610649871.ttf",
    "renate handwriting":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96b/92d/5c696b92d5f9b030763718.ttf",
    felt:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96b/ac9/5c696bac99129165714701.ttf",
    "core rhino 35 light":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96b/cc3/5c696bcc39de6242693890.otf",
    "cc zoinks":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/96b/f39/5c696bf3980b7006763460.ttf",
    "yu mincho":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/a3a/d1d/5c6a3ad1dbad4576669477.ttc",
    "porky's":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/a3b/5c9/5c6a3b5c92b45169695463.ttf",
    "gill sans std":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/acc/33e/5c6acc33e0cab331057966.ttc",
    "diverda sans com medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/ac8/a77/5c6ac8a77e4f6965577523.ttf",
    "kg love somebody":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/ac8/c29/5c6ac8c2924cd119418643.ttf",
    "a-otf shin maru go pro b":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/aca/419/5c6aca41943be497510953.ttf",
    "fot-kleepro-db-str":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/b23/902/5c6b23902a48f566114347.otf",
    justicesystem:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/b23/d12/5c6b23d122918647577320.ttf",
    "cooper md bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/bb2/c07/5c6bb2c076ddc723181546.ttf",
    ragnar:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/bb2/daa/5c6bb2daa419e633691665.ttf",
    "dfphsmincho-w7-aw":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/bb3/80f/5c6bb380f081a075420433.ttf",
    "gentium book basic":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/bb3/0fa/5c6bb30fa06d1789911144.ttf",
    "dfphsmincho-w9":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/bb3/3a8/5c6bb33a8c4bc081989860.ttf",
    "big bimbo nc":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c34/4e5/5c6c344e53315875448580.ttf",
    timeless:
      "https://www.animefever.tv/storage/app/fonts/public/5ce/286/12e/5ce28612e2710305150363.ttf",
    aquafont:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c34/920/5c6c34920126a488867931.ttf",
    whatdowedoallday:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c34/b2d/5c6c34b2da486382415103.ttf",
    "sketchflow print":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c35/ae4/5c6c35ae4d0ca278442019.ttf",
    chalkdust:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c36/026/5c6c360261653342855469.ttf",
    "kristen itc":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c36/470/5c6c36470787d760237235.ttf",
    "clannad round":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c36/623/5c6c36623f8e4934446032.ttf",
    "chubby cheeks":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c36/a77/5c6c36a77de7c308496600.ttf",
    "chinese ruler":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c36/b8b/5c6c36b8bc802168640566.ttf",
    "mv boli":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c36/cf5/5c6c36cf5cea5083867850.ttf",
    pencilcase:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c36/e18/5c6c36e18fbae979916464.ttf",
    "marker sd":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c36/ff8/5c6c36ff85b3d800776027.ttf",
    lightwrite:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c37/124/5c6c371243cac515513167.ttf",
    "korean calligraphy":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c37/28d/5c6c3728dbf66696416026.ttf",
    hanoded:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c37/3a6/5c6c373a651c6586971314.ttf",
    "hanoded heavy":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c37/3a6/5c6c373a651c6586971314.ttf",
    "creativeblock bb":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c37/5bd/5c6c375bdc6f0634375194.ttf",
    "suplexmentary comic nc":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c37/90e/5c6c3790eb73d658596684.ttf",
    "virtual dj":
      "https://www.animefever.tv/storage/app/fonts/public/5c6/c37/b80/5c6c37b80713b672342035.ttf",
    lora:
      "https://www.animefever.tv/storage/app/fonts/public/5c6/d5c/54c/5c6d5c54c66e7975097956.ttf",
    amaranth:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/7da/5ba/5c77da5ba802e907906128.otf",
    "bn dragon":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c4a/57d/5c7c4a57d349f434775039.ttf",
    "elektra light pro":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c4a/9ba/5c7c4a9baca6f284817859.otf",
    pastel:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c4a/d38/5c7c4ad389c51913285998.ttf",
    "roboto condensed":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c4b/729/5c7c4b729690e325719126.ttc",
    roboto:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c4c/225/5c7c4c22586c8126862053.ttc",
    "roboto light":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c4c/225/5c7c4c22586c8126862053.ttc",
    "roboto medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c4c/225/5c7c4c22586c8126862053.ttc",
    "angie-bold":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c54/961/5c7c54961bce7498916952.ttf",
    "aunchanted bold":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c56/638/5c7c566387abf910794619.ttf",
    tsunderedust:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c56/813/5c7c568137281189457465.ttf",
    gyosho:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c56/a16/5c7c56a168385031599821.ttf",
    "fredoka one":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c56/c2f/5c7c56c2f27db751921086.ttf",
    "codex lt":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c56/f6c/5c7c56f6c41d8265208449.ttf",
    "dcc - sharp distress black":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39e/dfb/5cd39edfb3056211235548.otf",
    "earth's mightiest expanded":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c57/5b0/5c7c575b091b2000938401.ttf",
    "janda manatee solid":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c57/9de/5c7c579de16c0575062260.ttf",
    zekton:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c57/b48/5c7c57b48f8aa641789171.ttf",
    "eurostile lt std":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c57/d85/5c7c57d853751575644900.otf",
    vogue:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c57/fab/5c7c57fab24f7985912971.ttf",
    market:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c58/543/5c7c58543ef0c456227776.ttf",
    "qlassik bold":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c59/212/5c7c59212657f735855720.ttf",
    "volter (goldfish)":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c59/3e7/5c7c593e7aa74672169540.ttf",
    jackeyfont:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c59/580/5c7c595808f4c913361077.ttf",
    "sarnowski sans serif":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c59/7ad/5c7c597ad901e885799268.ttf",
    "clubtypemercurius-medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c59/8e0/5c7c598e015d6803760402.ttf",
    "bell mt std":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5a/6f1/5c7c5a6f12998637387562.ttc",
    "architects daughter":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5c/0b7/5c7c5c0b73672356111570.ttf",
    "aldine721 lt bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5c/3a7/5c7c5c3a75e89121964896.ttf",
    "manjiro'shw21":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5c/606/5c7c5c60691e8909658459.ttf",
    "a little sunshine":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5c/93c/5c7c5c93c8b52540117630.ttf",
    "ainslie norm regular":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5c/c42/5c7c5cc426c96431489975.otf",
    "aero matics":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5c/e14/5c7c5ce14d81b692569495.ttf",
    "bradley hand itc":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5d/0ca/5c7c5d0ca8a33984435124.ttf",
    "brush script mt":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5d/2e5/5c7c5d2e59074818419429.ttf",
    "goudy stout":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5d/436/5c7c5d4363cc9068240337.ttf",
    meiryo:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c5f/c31/5c7c5fc31bd1f390848057.ttc",
    "meiryo ui":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c60/329/5c7c603297c76038709298.ttc",
    "split splat splodge":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c60/6cd/5c7c606cde7b1369561614.ttf",
    armychalk:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c60/9bf/5c7c609bf2279519543053.ttf",
    calligrapher:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c60/da1/5c7c60da1b064224202654.ttf",
    "chanor sans":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c61/2dd/5c7c612ddb1b6379603515.otf",
    carlito:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c61/42a/5c7c6142a6e98783199226.ttf",
    "broken stick":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c61/564/5c7c6156486cc713769372.ttf",
    "edo sz":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c61/83b/5c7c6183bf95b283942939.ttf",
    "ar cena":
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c61/aab/5c7c61aab7c86955051187.ttf",
    wingdings:
      "https://www.animefever.tv/storage/app/fonts/public/5c7/c61/c11/5c7c61c118c3a961760570.ttf",
    "sigvarserial-medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/3bc/c44/5c83bcc44a33c763755984.ttc",
    dink:
      "https://www.animefever.tv/storage/app/fonts/public/5c8/3bc/d7b/5c83bcd7bbcac511722297.ttf",
    "minion pro":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/3c1/ab3/5c83c1ab3e10c654392785.ttc",
    "lhf scriptana":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/3c1/c67/5c83c1c67ff58569503029.ttf",
    "sa-eroded heart":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/3c1/f62/5c83c1f6291f7350439678.ttf",
    "gagaille premiere":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/3c2/15c/5c83c215c2fbc102876758.ttf",
    "fontin sans rg":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8d/db6/5c8a8ddb6ada2918747122.ttc",
    "swis721 md bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8e/550/5c8a8e550670c892469914.ttf",
    "swis721 lt bt":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8e/686/5c8a8e68607fb523966985.ttf",
    lithograph:
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8e/7e6/5c8a8e7e643aa077290656.ttf",
    magik:
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8e/9c5/5c8a8e9c5dd90792809234.ttf",
    odense:
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8e/b30/5c8a8eb301ac4682270114.ttf",
    "renaiss-italic":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8e/fe7/5c8a8efe784ce505230198.ttf",
    shakeyslabserif:
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8f/1a4/5c8a8f1a4068a875983202.ttf",
    "sf proverbial gothic extended":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8f/23b/5c8a8f23b8af9996645965.ttf",
    "hiroshige-medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8f/3eb/5c8a8f3ebbe49732872887.ttf",
    "lennoxmditc tt":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/a8f/565/5c8a8f565e55e211179405.ttf",
    "gill sans mt pro medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/af1/731/5c8af17316d3e848482099.ttc",
    octemberscript:
      "https://www.animefever.tv/storage/app/fonts/public/5c8/ef9/c93/5c8ef9c931059162899723.ttf",
    alpha54:
      "https://www.animefever.tv/storage/app/fonts/public/5c8/ef9/f43/5c8ef9f43e83c294693745.ttf",
    "janda everyday casual":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/efa/1b1/5c8efa1b1dc3f650282679.ttf",
    "helvetica neue":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/efa/64e/5c8efa64e3234110389757.ttf",
    "humana serif md itc tt":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e82/398/5cde8239889cc235917022.ttf",
    "averia sans":
      "https://www.animefever.tv/storage/app/fonts/public/5c8/efb/ea3/5c8efbea3a4c7363090441.ttc",
    "absarasans-medium":
      "https://www.animefever.tv/storage/app/fonts/public/5c9/56f/9a1/5c956f9a1e3f6124165880.otf",
    filosofiabold:
      "https://www.animefever.tv/storage/app/fonts/public/5c9/56f/b0a/5c956fb0a25a7980110903.ttf",
    georgia:
      "https://www.animefever.tv/storage/app/fonts/public/5c9/56f/bf6/5c956fbf6fd51211571606.ttf",
    profile:
      "https://www.animefever.tv/storage/app/fonts/public/5c9/f13/ad3/5c9f13ad37b31362994292.ttc",
    "vega antikva":
      "https://www.animefever.tv/storage/app/fonts/public/5c9/f13/c40/5c9f13c407572657813655.ttf",
    "pencilpete font":
      "https://www.animefever.tv/storage/app/fonts/public/5c9/f13/dfd/5c9f13dfdc8ca673707992.ttf",
    "hiroshige std book":
      "https://www.animefever.tv/storage/app/fonts/public/5c9/f13/f39/5c9f13f398298658057680.otf",
    "obeliskmditc tt":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43b/fe6/5ca43bfe63139682312645.ttf",
    llcooper:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43c/105/5ca43c105b1a3805800685.ttf",
    openclassic:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43c/36c/5ca43c36c2a4d592878322.ttf",
    cardo:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43c/587/5ca43c587928a588630875.ttf",
    "ms pmincho":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43c/729/5ca43c7295e28671974939.ttc",
    "amazobitaemostrovcrazy!":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43c/8da/5ca43c8da86ce629629901.ttf",
    "continuum medium":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43c/e4e/5ca43ce4ec741700016277.ttf",
    "glass houses":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43c/fbe/5ca43cfbe575f531942958.ttf",
    blackmoorplain:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43d/106/5ca43d106c9a0194269058.ttf",
    "flesh wound":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43d/2a5/5ca43d2a5e1c4697872123.ttf",
    "dfmarugothic-md":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43d/570/5ca43d570bfd6438505498.ttf",
    century:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/43d/7a9/5ca43d7a9bb1f107823275.ttf",
    "clearface ssi":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/44c/edc/5ca44cedc1f95441265995.ttf",
    hansagotisch:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/44d/51a/5ca44d51a0505661637498.ttf",
    "im fell english pro":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/44d/8b3/5ca44d8b39d6d843785836.otf",
    "impress bt":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/940/606/5ca940606d4d1931230965.ttf",
    "commie sans":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/867/e07/5e2867e073276296218051.ttc",
    "sf comic script":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/940/d67/5ca940d67fb7b777846234.ttf",
    "fighting spirit tbs":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/941/6a8/5ca9416a8c326634782284.ttf",
    bronic:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/941/b29/5ca941b296e21996701447.ttf",
    "distorted and scratchy":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/941/d23/5ca941d23838f375220153.ttf",
    dickvandyke:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/941/ec8/5ca941ec8ca8c341770658.ttf",
    "speed bump":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/942/108/5ca9421080ac9727923449.ttf",
    "chizzler bold":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/942/400/5ca9424000512441296041.ttf",
    pdrpt:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/942/5c4/5ca9425c44d63115940218.ttf",
    "badonk-a-donk":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/942/90b/5ca94290b2f95088695327.ttf",
    "lethargic (brk)":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/942/c2d/5ca942c2db0dd615090549.ttf",
    obelixpro:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/942/d80/5ca942d801b2a385455157.ttf",
    cmcorruged:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/942/fe8/5ca942fe82fc7190674230.ttf",
    destroy:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/945/7c0/5ca9457c0f8c1890464569.ttf",
    "cm sans serif 2012":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/945/a63/5ca945a63324e552423009.ttf",
    "caslon antique":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/945/c48/5ca945c48ee7a676457020.ttf",
    utopia:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/946/008/5ca9460087e9d999619936.ttf",
    "formata regular":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/946/340/5ca9463408938226135650.otf",
    david:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/946/88a/5ca94688a2a70868147754.ttf",
    "arno pro":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/946/a5a/5ca946a5acc65298379452.otf",
    "ana-oneiroparmeni82":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/946/d41/5ca946d418aa0550077663.ttf",
    "sf comic script condensed":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/947/59d/5ca94759d3486579322452.ttf",
    "14 minutes":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/948/003/5ca9480033d95261751234.ttf",
    candara:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/948/0f3/5ca9480f3bd74379194863.ttf",
    "estrangelo edessa":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/a21/df0/5caa21df017fe900746811.ttf",
    "cataneo bt":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/a22/029/5caa2202985b4228072819.ttf",
    "banga ssi":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/a22/34a/5caa2234a4285520749378.ttf",
    anna:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/a22/3d3/5caa223d39255867248864.ttf",
    tarantel:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bf1/91c/5cabf191c9f16129588332.ttf",
    "adobe gothic std b":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bf3/250/5cabf325014a3658484703.otf",
    "bethany style letters":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bf8/961/5cabf8961fd94977362275.ttf",
    "bliss pro ot":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bfa/905/5cabfa905c50a171464130.otf",
    wonderfull:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bfb/1e2/5cabfb1e2a62e198527679.ttf",
    harabara:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bfb/766/5cabfb766d5dd493881884.ttf",
    "happy hell":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bfc/4c5/5cabfc4c55c7b460238344.ttf",
    clubland:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bfd/151/5cabfd1514b0a342007998.ttf",
    "year 2000":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bfd/429/5cabfd4294699593785737.ttf",
    "montara gothic":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bfe/137/5cabfe13788f6660552753.otf",
    lehn236:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bfe/316/5cabfe3163aa1413809868.ttf",
    "socchi docchi":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bff/226/5cabff226ed34102482350.ttf",
    "folks-bold":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/bff/668/5cabff668edbe775203671.ttf",
    "dfpop1w9u-b5":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c00/04b/5cac0004b9439525009201.ttf",
    "spike crumb swollen":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c00/7c5/5cac007c5c9d1510319605.ttf",
    "heisei maru gothic std w8":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c00/e0a/5cac00e0a40e6965892568.otf",
    informc:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c01/cad/5cac01cad0c03183916417.ttc",
    "cee's hand":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c02/332/5cac02332a663979648488.ttc",
    cczoinks:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c02/63f/5cac0263f3aff838688059.ttf",
    "kg ten thousand reasons":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c02/b6c/5cac02b6cc271029480864.ttf",
    "jambono-regular":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c03/313/5cac0331330be578584894.ttf",
    "paper johnny eins":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c03/5e6/5cac035e6b081955040082.ttf",
    "the rifleman":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c03/a20/5cac03a20763b800527957.ttf",
    pixelated:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c04/4d4/5cac044d4d733525800992.ttf",
    "brady bunch":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c04/6d9/5cac046d99ffa561205052.ttf",
    "d3 streetism":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c04/86d/5cac0486d8950543398760.ttf",
    "blambot casual":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c04/bfb/5cac04bfbf24c498011230.ttf",
    "123marker":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c05/1a2/5cac051a246f6503194296.ttf",
    flora:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c05/ada/5cac05adaef32715244907.ttf",
    "pump demi bold let":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c06/488/5cac064886a5f458096679.ttf",
    "renee-thin":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/c06/64a/5cac0664a8877619178279.ttf",
    "linux biolinum":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/f80/9dc/5caf809dcde9f872470508.ttf",
    "ff profile medium":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/fee/b30/5cafeeb304458657506531.ttc",
    "a for a":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/fee/f11/5cafeef116f40242302400.ttf",
    "certa sans":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/fef/6fc/5cafef6fc4cd0929832487.ttc",
    "forgotten futurist rg":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/fef/878/5cafef8789fbe069845770.ttf",
    dtlprokyonst:
      "https://www.animefever.tv/storage/app/fonts/public/5ca/fef/9b9/5cafef9b9dc17942669903.ttf",
    "alte haas grotesk":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/fef/d01/5cafefd019ef5220747521.ttf",
    "proto sans 21":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/fef/e7e/5cafefe7edaa0295410477.otf",
    "maiandra dmbd gd":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/fef/f6f/5cafeff6f1682536799925.ttf",
    "humnst777 blkcn bt":
      "https://www.animefever.tv/storage/app/fonts/public/5ca/ff0/50d/5caff050dc1c1823120441.ttf",
    "noto sans jp medium":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/0ad/dbd/5cb0addbd4411098080647.otf",
    "noto sans jp bold":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/0ae/090/5cb0ae090c769593410012.otf",
    "noto sans jp black":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/0ae/561/5cb0ae5619cef077555663.otf",
    "noto sans jp regular":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/0ae/760/5cb0ae7608d6e105823088.otf",
    "noto sans jp thin":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/0ae/91c/5cb0ae91ce054095700463.otf",
    "nunito sans":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/0af/924/5cb0af9243c5e710951208.ttc",
    "bellgothicstd-med":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/10b/fec/5cb10bfeca040044693977.otf",
    "quadraatsans-regular":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/10c/327/5cb10c3274da6132267041.otf",
    blockparty:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/10c/5fb/5cb10c5fbab9b414913322.ttf",
    blzee:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/10c/c01/5cb10cc01bb84732212327.ttf",
    "antique olive std light":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/10d/f24/5cb10df24328a217782243.otf",
    reswysokr:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/10e/119/5cb10e119bbc6392332558.otf",
    "hira v8":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/123/566/5cb1235669401614101754.ttf",
    "bankgothic md bt":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/123/918/5cb123918c74a334635699.ttf",
    "mailart rubberstamp":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/123/c36/5cb123c36e6a4394547291.otf",
    comicka:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/12e/998/5cb12e9981f58610634117.ttf",
    quaysansmditctt:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/13b/aab/5cb13baabe52b105064460.ttc",
    blackchancery:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/13b/beb/5cb13bbebcc64048321112.ttf",
    "oldstyle 1":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/13b/eab/5cb13beab5fc1464939240.ttf",
    yonkers:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/13c/52e/5cb13c52e6370449831063.ttf",
    "kozuka mincho pro m":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/18e/1e3/5cb18e1e39982471534164.ttf",
    "brushtype-semibold":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/18e/4c1/5cb18e4c1cbdf335079128.ttf",
    "edmondsans bold":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/18e/5e1/5cb18e5e1e247413815855.otf",
    "kozuka gothic pr6n r":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/18f/3b5/5cb18f3b5475a998581666.otf",
    "lao ui":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/195/e53/5cb195e53c944536765366.ttf",
    "chuu2-next":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/195/f97/5cb195f97457d795343695.ttf",
    palatino:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/196/199/5cb196199545f055380774.ttf",
    "kg dancing on the rooftop":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/196/3c9/5cb1963c90542792935221.ttf",
    "handwritten crystal v2":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/389/5f9/5cb3895f96b4a032915874.ttf",
    "ar darling":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/440/c1c/5cb440c1ca091839050478.ttf",
    euphemia:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/440/fa5/5cb440fa561f6377118383.ttf",
    "colors of autumn":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/441/097/5cb4410978fd4064747640.ttf",
    "bosthon brush":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/441/30c/5cb44130ca094816037519.ttf",
    youthanasia:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/6c2/5aa/5cb6c25aa11dd108630630.ttc",
    "poor richard":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/6c2/7cc/5cb6c27ccb401617833242.ttf",
    xscale:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/6c2/8ec/5cb6c28ec54ff906144846.ttf",
    "hand boys":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/8a8/80e/5cb8a880e36cf827649425.ttf",
    "zapfhumnst bt":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/bb4/c35/5cbbb4c35af3a739603557.ttc",
    "agaramond lt bold":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/bb4/f99/5cbbb4f999f37693018897.ttf",
    "se\u00f1or domingo":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/bb5/0d6/5cbbb50d6dc7a465011145.ttf",
    "shannon std book":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/beb/9f5/5cbbeb9f5f5d0482654580.otf",
    "calisto mt":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/bec/392/5cbbec39243dd696231330.ttf",
    "candela bold":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/bec/97c/5cbbec97cc491328065585.ttc",
    "nbp informa fivesix":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/bec/f9a/5cbbecf9ae75f729724213.ttf",
    "costa ptf light":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/cfb/a5b/5cbcfba5b6fcf170701002.otf",
    "ad hoc bis":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/cfb/be8/5cbcfbbe8fca0815697928.ttf",
    "traditional arabic":
      "https://www.animefever.tv/storage/app/fonts/public/5cb/cfb/d54/5cbcfbd54a62a165608791.ttf",
    zantroke:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/cfc/352/5cbcfc352e779308163071.otf",
    gilgamesh:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/cfc/4ce/5cbcfc4ceb29f728544425.ttf",
    tahoma:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/cfd/9be/5cbcfd9bef8a1511511962.ttc",
    fondamento:
      "https://www.animefever.tv/storage/app/fonts/public/5cb/cfd/ddf/5cbcfdddf2d43291408458.ttf",
    "clearface gothic lt std":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/0e6/147/5cc0e6147e304711768014.otf",
    "dfgganshinkei-w7-nazokano":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/0e6/8c8/5cc0e68c8ba3a677404635.ttf",
    rockwell:
      "https://www.animefever.tv/storage/app/fonts/public/5cc/0e6/a95/5cc0e6a959064654738250.ttf",
    wunderlich:
      "https://www.animefever.tv/storage/app/fonts/public/5cc/143/ce8/5cc143ce899a6030695356.ttc",
    "wunderlich-medium":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/143/ce8/5cc143ce899a6030695356.ttc",
    "wunderlich-bold":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/143/ce8/5cc143ce899a6030695356.ttc",
    "wunderlich-italic":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/143/ce8/5cc143ce899a6030695356.ttc",
    "wunderlich-bolditalic":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/143/ce8/5cc143ce899a6030695356.ttc",
    "calligraphic 810 bt":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/149/dcb/5cc149dcb63a3360258401.ttf",
    "calligraph810 bt":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/149/dcb/5cc149dcb63a3360258401.ttf",
    "jesaya free":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/435/578/5cc435578a07f974603627.ttf",
    "avalontype bold":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/555/a16/5cc555a1628c8633692253.ttf",
    "fot-seurat pro en b":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/555/bda/5cc555bdaa821468861892.ttf",
    medrano:
      "https://www.animefever.tv/storage/app/fonts/public/5cc/555/d13/5cc555d130ec6683039349.ttf",
    "hvd comic serif pro":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/556/1b4/5cc5561b4506a015276297.otf",
    sile:
      "https://www.animefever.tv/storage/app/fonts/public/5cc/556/3a7/5cc5563a73088943062784.ttf",
    "fot gaku maru gothic pro strp":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/556/583/5cc5565831672498842157.otf",
    "seans other hand":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/556/67b/5cc55667be250714572015.ttf",
    gelpen:
      "https://www.animefever.tv/storage/app/fonts/public/5cc/556/bc2/5cc556bc2de5f750308247.ttf",
    "perfect day demo":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/556/e93/5cc556e937454386392800.otf",
    kiddish:
      "https://www.animefever.tv/storage/app/fonts/public/5cc/557/178/5cc557178d005476290733.ttf",
    "garamond premr pro":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/559/a09/5cc559a09a894545863395.ttc",
    "garamond premr pro smbd capt":
      "https://www.animefever.tv/storage/app/fonts/public/5cc/559/a09/5cc559a09a894545863395.ttc",
    alegreya:
      "https://www.animefever.tv/storage/app/fonts/public/5cc/561/e32/5cc561e32530c200152509.otf",
    handwriting:
      "https://www.animefever.tv/storage/app/fonts/public/5cc/561/fab/5cc561fab86ba493145413.ttf",
    minecraftia:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b5/236/5cd0b52367584761619168.ttf",
    "pixel arial 11":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b5/421/5cd0b5421a6bb574399700.ttf",
    "arial rounded mt":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b5/715/5cd0b5715ee2c835173708.ttf",
    "mercury text g1 semibold":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b5/a42/5cd0b5a428f48431126728.otf",
    "fot-\u30b3\u30df\u30c3\u30af\u30ec\u30b2\u30a8 std b":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b6/e69/5cd0b6e69e56e540364001.otf",
    "fot-comicreggae std b":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b6/e69/5cd0b6e69e56e540364001.otf",
    "istok web":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b7/b05/5cd0b7b05cbf6044514991.ttc",
    "hp-chiller":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b7/e18/5cd0b7e184a25727560384.ttf",
    "hand of diesel":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b7/f5a/5cd0b7f5abb16074243138.ttf",
    daveshand:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b8/1b2/5cd0b81b28acf388497637.ttf",
    "fot-hummingstden-natsukise":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/0b8/36a/5cd0b836a942d423136779.ttf",
    "post human":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/398/c15/5cd398c15c1ea371373061.ttf",
    "elmerfont-en":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/398/db1/5cd398db19bf2205828798.ttf",
    "northern territories":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/399/01b/5cd39901bbeff449870311.ttf",
    "dfphsmincho-w9-cp":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/399/1c8/5cd3991c89298703589982.ttf",
    "dfphsmaru-w4-cp":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/399/304/5cd3993047141697845753.ttf",
    "ignite the light":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/399/447/5cd3994476caa444726899.ttf",
    "iwata new gothic pro-cp b":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/399/6d3/5cd3996d3642f061522662.ttf",
    "japanese brush":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/399/899/5cd399899b8cc633831712.ttf",
    "kozuka gothic pr6n-cp-spkanji h":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/399/bf8/5cd399bf830a8829598638.ttf",
    "dcphigemoji-cp-speckanji-w5":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/399/e5d/5cd399e5d17f6124267141.ttf",
    lehn117:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39a/071/5cd39a071d32d218803144.ttf",
    "brook 23":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39a/184/5cd39a184e8d1042031781.ttf",
    bubblegum:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39a/2c6/5cd39a2c6294a397239196.ttf",
    parla:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39a/6f0/5cd39a6f01b6a892407988.ttf",
    "apjfk-anohana":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39a/e29/5cd39ae297a2c103468470.ttf",
    "iwata new gothic pro l-cp":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39a/fb4/5cd39afb47278358064731.ttf",
    hgpozawakaishotaicp:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39b/1c3/5cd39b1c334cb376100277.ttf",
    "g-otf kkyoukasho ica std m-cp":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39b/323/5cd39b323c119697451971.otf",
    "dfgkb-madokatitle":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39b/4f0/5cd39b4f0e9c7203827418.ttf",
    edo:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39b/6c2/5cd39b6c2cd3c752253477.ttf",
    federationbold:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39b/856/5cd39b8568416238411999.ttf",
    "commerce black condensed ssi":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39b/9bb/5cd39b9bb40e8274382748.ttf",
    stomp_bullpen:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39b/df6/5cd39bdf685d9928664337.ttf",
    "smudger let":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39b/f64/5cd39bf647829300315421.ttf",
    "dfgcraftsumi-w9-en":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39c/5fc/5cd39c5fcaab2218538063.ttf",
    "dfgkanteiryu-xb-cp":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39e/f2d/5cd39ef2dacbe910529485.ttf",
    "iwata new gothic pro e-cp":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39f/104/5cd39f104756d320284197.ttf",
    "dfsngyosho-cp":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39f/369/5cd39f369c2ec052028336.ttf",
    fatfontsolid:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/39f/629/5cd39f629e348105255642.ttf",
    lehn015:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/3a5/c3c/5cd3a5c3c9b0b901590647.ttf",
    lehn075:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/3a5/d5b/5cd3a5d5bea1a379980657.ttf",
    "airplanes in the night sky":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/3a5/ff5/5cd3a5ff5cac8976256325.ttf",
    "pt sans tight":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/836/564/5cd836564ac2e890138463.ttc",
    "second breakfast":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/836/c61/5cd836c61e85f402287899.ttf",
    haettenschweiler:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/837/893/5cd837893f1d2429290385.ttf",
    "caviar dreams":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/837/ab0/5cd837ab04c1d642869923.ttf",
    "cooper black":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/838/574/5cd8385749a21364466299.ttf",
    "plantagenet cherokee":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/838/8f9/5cd8388f9e630548466535.ttf",
    "alexanderbecker-medium":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a3a/8bc/5cda3a8bcbb3d112361593.ttc",
    "thyssen j":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a3b/52b/5cda3b52b78fe214776524.ttc",
    "salernomi j":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a3b/9c8/5cda3b9c83b30020110906.ttf",
    "tabac g3 regular":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a3f/5fa/5cda3f5faa5d6135838842.ttc",
    "tabac g3 medium":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a3f/5fa/5cda3f5faa5d6135838842.ttc",
    "tomato round condensed":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a3f/9a1/5cda3f9a1bbe2468120677.ttf",
    "dhf semangat 2012 demo":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a3f/d65/5cda3fd65d4d9545283761.ttf",
    ubuntu:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a49/38d/5cda4938d1877957297409.ttc",
    nyala:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a49/58a/5cda4958a7824468322837.ttf",
    "love is complicated again":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a49/e98/5cda49e985acd200254916.ttf",
    "optima lt std":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a4a/070/5cda4a0708763304044059.ttf",
    "abovea demo version":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a4a/5af/5cda4a5af3bcf502416299.otf",
    "badaboom bb":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/a4a/87f/5cda4a87f30b3714311476.ttf",
    "stone inf sem os itc tt gosick":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e81/9b4/5cde819b45458048526064.ttf",
    "dfpminchop-w5-gosick":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e81/b57/5cde81b57654a971198382.ttf",
    "dfpminchop-w3-gosick":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e81/ca0/5cde81ca0bb6d590524948.ttf",
    "gosickscript-locations":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e81/ee9/5cde81ee98787166519247.ttf",
    "dfpleigaso-w9-gosick":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e82/7f6/5cde827f68f09134291519.ttf",
    "heiseiminchostd-w7-gosick":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e82/b3c/5cde82b3c12c0104239118.ttf",
    "simsun-gosick":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e82/f98/5cde82f986d5c220556110.ttf",
    "dfgleishow6-kami":
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e83/1f4/5cde831f4fda8244771392.ttf",
    goobascript:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e83/3a5/5cde833a517c8383102150.ttf",
    kelmscott:
      "https://www.animefever.tv/storage/app/fonts/public/5cd/e83/532/5cde835327140199081517.ttf",
    akzentrounded:
      "https://www.animefever.tv/storage/app/fonts/public/5ce/285/5a2/5ce2855a2fd45590811739.ttf",
    emmettshand:
      "https://www.animefever.tv/storage/app/fonts/public/5ce/285/7cd/5ce2857cd7b02646288906.ttf",
    "merchant copy":
      "https://www.animefever.tv/storage/app/fonts/public/5ce/285/91d/5ce28591d722f471616698.ttf",
    "atlantix ssi":
      "https://www.animefever.tv/storage/app/fonts/public/5ce/286/da8/5ce286da8cdaa891639088.ttc",
    "transport new medium":
      "https://www.animefever.tv/storage/app/fonts/public/5ce/286/4cc/5ce2864cc489c011962558.ttf",
    "cleric ssi":
      "https://www.animefever.tv/storage/app/fonts/public/5ce/286/702/5ce286702738b067555525.ttf",
    brodyd:
      "https://www.animefever.tv/storage/app/fonts/public/5ce/c51/424/5cec51424aee9572162469.ttf",
    paintypaint:
      "https://www.animefever.tv/storage/app/fonts/public/5ce/c51/550/5cec5155008b4233944753.ttf",
    hzhandwrite:
      "https://www.animefever.tv/storage/app/fonts/public/5ce/c51/71a/5cec5171a2b62286469411.ttf",
    euphorigenic:
      "https://www.animefever.tv/storage/app/fonts/public/5ce/c51/8cd/5cec518cd398f642222175.ttf",
    teen:
      "https://www.animefever.tv/storage/app/fonts/public/5ce/c5f/66a/5cec5f66a7ec6150279735.ttf",
    "honya-ji":
      "https://www.animefever.tv/storage/app/fonts/public/5cf/4c1/c12/5cf4c1c12b779996509441.ttf",
    "showcard gothic":
      "https://www.animefever.tv/storage/app/fonts/public/5d0/33e/2de/5d033e2ded166318070650.ttf",
    "catatan perjalanan":
      "https://www.animefever.tv/storage/app/fonts/public/5d0/33e/725/5d033e725cec9629829215.otf",
    "nymph's handwriting":
      "https://www.animefever.tv/storage/app/fonts/public/5d0/33f/a07/5d033fa075170846624997.ttf",
    loveness:
      "https://www.animefever.tv/storage/app/fonts/public/5d0/33e/a3d/5d033ea3da973622992902.ttf",
    poo:
      "https://www.animefever.tv/storage/app/fonts/public/5d0/33e/bd4/5d033ebd45439865693715.ttf",
    consolas:
      "https://www.animefever.tv/storage/app/fonts/public/5d0/33e/e2b/5d033ee2b7c16983281866.ttf",
    catcafe:
      "https://www.animefever.tv/storage/app/fonts/public/5d0/33e/f75/5d033ef7551de462041197.ttf",
    sweetlove:
      "https://www.animefever.tv/storage/app/fonts/public/5d0/33f/2dd/5d033f2dd011c661130586.ttf",
    polo:
      "https://www.animefever.tv/storage/app/fonts/public/5d0/340/418/5d0340418acee012306779.ttf",
    "fot-matissev pro ub":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/26d/359/5d126d359a7f2125913358.otf",
    "fot-matissev pro eb":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/26d/490/5d126d490fc68973439471.otf",
    pwjunefont:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/52e/52e/5d152e52ece3d923914242.ttf",
    "kozuka mincho pro strippedv3 h":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/553/584/5d15535841540701986244.otf",
    faktos:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/553/7b3/5d15537b387dd012666055.ttf",
    "cat eyes":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/553/8fe/5d15538fe5096624062756.otf",
    boulder:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/553/a58/5d1553a5871ab164651866.ttf",
    array:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/553/bb0/5d1553bb0b76e503268752.ttf",
    h_kobato_main:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/553/d23/5d1553d239e90308237773.ttf",
    "script mt":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/554/263/5d15542632499112647049.ttf",
    "fot kafu techno std stripped":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/554/6ea/5d15546ea85ae441120699.otf",
    "metromedium lt two":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/667/2b6/5d16672b631bd887605325.otf",
    flair:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/667/405/5d16674059839586883173.ttf",
    kreon:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/667/af6/5d1667af65c15558841039.ttf",
    dokchampa:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/667/d3f/5d1667d3f420d664688834.ttf",
    "commodore 64":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/667/f96/5d1667f966099920351287.ttf",
    "okay marker":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/668/15f/5d166815f2696174805687.ttf",
    "mead bold":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/668/287/5d1668287cda8142059248.ttf",
    "broken poster":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/668/415/5d166841515b2831228291.otf",
    "si brot!":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/668/5d7/5d16685d7863d596660782.ttf",
    drugs:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/668/7e4/5d16687e4b3ac233937150.otf",
    gisha:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/668/a7f/5d1668a7f1afe795698662.ttf",
    "hearts bv":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/668/cc3/5d1668cc39c7a973459793.ttf",
    "international playboy":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/668/de3/5d1668de32128458900332.ttf",
    "kievit-medium":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/668/f02/5d1668f027437607360596.ttf",
    "fot-skip std-cp b":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/669/1a4/5d16691a41d77503109141.ttf",
    "vagrounded bt":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/669/5e0/5d16695e0d6a1363950098.ttf",
    yummycupcakes:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/669/6f6/5d16696f69168343857503.ttf",
    catshop:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/669/83b/5d166983b9e73821507196.ttf",
    asul:
      "https://www.animefever.tv/storage/app/fonts/public/5d1/669/9c2/5d16699c22ae5068631496.ttf",
    "early times demo":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/669/ac4/5d1669ac416a2944769100.otf",
    "lemon squeezy":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/669/d88/5d1669d886e34039581551.ttf",
    "lucida sans":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/66a/b1c/5d166ab1c287b840078097.ttc",
    "lucida sans unicode":
      "https://www.animefever.tv/storage/app/fonts/public/5d1/66b/204/5d166b204cf3b864827703.ttf",
    "a-otf shin go pr5 b":
      "https://www.animefever.tv/storage/app/fonts/public/5d2/550/52a/5d255052a1e9b394432965.otf",
    "seagull md bt":
      "https://www.animefever.tv/storage/app/fonts/public/5d2/e36/967/5d2e369675e1c130762033.ttf",
    "zrnic cyr":
      "https://www.animefever.tv/storage/app/fonts/public/5d2/e36/f00/5d2e36f00a84e087328409.ttf",
    "agency fb":
      "https://www.animefever.tv/storage/app/fonts/public/5d2/edf/561/5d2edf5613cc2668826421.ttc",
    magra:
      "https://www.animefever.tv/storage/app/fonts/public/5d2/edf/810/5d2edf8103b8c205997457.ttf",
    "crashlanding bb":
      "https://www.animefever.tv/storage/app/fonts/public/5d2/edf/aee/5d2edfaee9727306564407.ttf",
    "baar sophia":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/3c2/29f/5d33c229f1188904724019.ttf",
    "indie flower":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4b/777/5d3e4b7774b96641583561.ttf",
    station:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4b/8d9/5d3e4b8d92f90478995584.ttf",
    "throwmyhandsupintheair-bold":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4b/d46/5d3e4bd469fff888636634.otf",
    "dk borrowdale":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4b/efc/5d3e4befc3f83326229540.otf",
    rolinabold:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4c/088/5d3e4c0884d9f300520090.ttf",
    vollkorn:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4f/ce3/5d3e4fce3db90294249029.ttc",
    "vollkorn-bold":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4f/ce3/5d3e4fce3db90294249029.ttc",
    "wc mano negra bta":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4c/560/5d3e4c56039b6162744931.otf",
    nikaia:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4d/098/5d3e4d0981058627236278.otf",
    "yard sale":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4d/242/5d3e4d24255cc195809153.ttf",
    "typo round regular demo":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4d/495/5d3e4d4957ea5270188773.otf",
    ryp_sflake6:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4d/588/5d3e4d588028a354057059.ttf",
    signika:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4d/74e/5d3e4d74e3058952492349.otf",
    loremipsum:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4d/9ed/5d3e4d9eddd09211010191.ttf",
    handgley:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4e/09c/5d3e4e09c1c11266476879.ttc",
    "handgley-bold":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4e/09c/5d3e4e09c1c11266476879.ttc",
    "gloria hallelujah":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4e/ed3/5d3e4eed367d2599085349.ttf",
    mchandwriting:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e4f/1aa/5d3e4f1aa50d4930120367.otf",
    "averia serif libre":
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e50/07e/5d3e5007e6d9e316234525.ttf",
    eraser:
      "https://www.animefever.tv/storage/app/fonts/public/5d3/e50/a70/5d3e50a70c815767936959.ttf",
    asap:
      "https://www.animefever.tv/storage/app/fonts/public/5d4/050/752/5d40507523e49996874536.ttc",
    "asap medium":
      "https://www.animefever.tv/storage/app/fonts/public/5d4/050/752/5d40507523e49996874536.ttc",
    "asap semibold":
      "https://www.animefever.tv/storage/app/fonts/public/5d4/050/752/5d40507523e49996874536.ttc",
    shrimpfriedriceno1:
      "https://www.animefever.tv/storage/app/fonts/public/5d8/762/3db/5d87623db2c5d434902434.ttf",
    "i still believe":
      "https://www.animefever.tv/storage/app/fonts/public/5d8/762/5cd/5d87625cd992f580424414.ttf",
    "f*ck beans":
      "https://www.animefever.tv/storage/app/fonts/public/5d8/762/75d/5d876275d31de856709252.ttf",
    ebrima:
      "https://www.animefever.tv/storage/app/fonts/public/5d8/c84/d7c/5d8c84d7cdb5b584028655.ttc",
    aucoinextbol:
      "https://www.animefever.tv/storage/app/fonts/public/5d8/c85/285/5d8c85285eedc543642909.ttf",
    newbaskerville:
      "https://www.animefever.tv/storage/app/fonts/public/5d8/c86/133/5d8c861330380513347737.ttc",
    scheherazade:
      "https://www.animefever.tv/storage/app/fonts/public/5d8/e06/0e0/5d8e060e0bf8e814494655.ttf",
    "andika new basic":
      "https://www.animefever.tv/storage/app/fonts/public/5d8/e06/f02/5d8e06f02eddb479998020.ttc",
    kaiti:
      "https://www.animefever.tv/storage/app/fonts/public/5db/8d7/1fd/5db8d71fdd59e107914124.ttf",
    tonite:
      "https://www.animefever.tv/storage/app/fonts/public/5db/8d8/cf4/5db8d8cf4a5ba893140776.ttf",
    "formalscrp421 bt":
      "https://www.animefever.tv/storage/app/fonts/public/5db/8d9/00b/5db8d900b3592516576713.ttf",
    "times sans serif":
      "https://www.animefever.tv/storage/app/fonts/public/5db/8d9/52f/5db8d952f1f82010673812.ttf",
    painfresco:
      "https://www.animefever.tv/storage/app/fonts/public/5dc/824/c3d/5dc824c3d1924466482377.ttf",
    respublica:
      "https://www.animefever.tv/storage/app/fonts/public/5dc/824/d94/5dc824d9493a9190470878.ttf",
    londontwo:
      "https://www.animefever.tv/storage/app/fonts/public/5dc/824/f0e/5dc824f0ed239233004810.ttf",
    "fot-matisse pro toaru eb":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/826/4e2/5dc8264e27dd4496138494.ttf",
    "noto sans med":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/828/21a/5dc82821af555862565516.ttc",
    "wc rhesus b bta":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/828/47d/5dc82847d3949431631364.otf",
    "kozuka gothic pr6n h":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/828/685/5dc82868588c4170293295.ttf",
    "fot-matisseelegantopro-eb":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/828/869/5dc828869916e123234094.ttf",
    adhoc:
      "https://www.animefever.tv/storage/app/fonts/public/5dc/828/a0c/5dc828a0c7d1e696643066.ttf",
    "fot manyo sosho std stripped eb":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/828/b9a/5dc828b9ae633592376507.otf",
    "did you see that":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/829/0b0/5dc8290b0dfe9365845177.ttf",
    "iwata mincho old pro-tr":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/829/828/5dc829828e810542434138.ttf",
    atômico:
      "https://www.animefever.tv/storage/app/fonts/public/5dc/829/a93/5dc829a939cb3856810718.ttf",
    "iwata mincho old pro h-tr":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/829/c96/5dc829c96e320570402903.ttf",
    "babe bamboo":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/829/da0/5dc829da0b76b988348039.ttf",
    "brady bunch remastered":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/829/f04/5dc829f043db9012070003.ttf",
    "dk prince frog":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/82a/050/5dc82a05053a5339698961.otf",
    fayesmousewriting:
      "https://www.animefever.tv/storage/app/fonts/public/5dc/82a/20b/5dc82a20bdd02377946726.ttf",
    "fot pop happiness std stripped":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/82a/6a1/5dc82a6a168da492356534.otf",
    "kozuka mincho pr6n m-en":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/82a/9ea/5dc82a9ea48c2271481349.ttf",
    "matisse itc":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/82a/d51/5dc82ad515a05047422334.ttf",
    "iwata mincho old pro h":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/82b/0f5/5dc82b0f5fa96934414563.ttf",
    "iwata mincho old pro en b":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/82b/4b2/5dc82b4b284cb515662924.otf",
    "iwata mincho old pro m-kami":
      "https://www.animefever.tv/storage/app/fonts/public/5dc/82b/6b3/5dc82b6b30254188637801.ttf",
    nozakidialogue:
      "https://www.animefever.tv/storage/app/fonts/public/5de/6a8/bed/5de6a8bedf6fd726496057.otf",
    elmerfont:
      "https://www.animefever.tv/storage/app/fonts/public/5de/6a8/de1/5de6a8de1ccf3148903434.ttf",
    "menkaya beta":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6a8/fd5/5de6a8fd5bb19547792487.ttf",
    bpreplay:
      "https://www.animefever.tv/storage/app/fonts/public/5de/6a9/25a/5de6a925a6cbe932688328.otf",
    "foot fight":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6bb/538/5de6bb5385ba1701055713.ttf",
    "greco ssi":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6bb/995/5de6bb9951fbf383309076.ttc",
    "mesouran casual ssi":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6bb/d24/5de6bbd24364b150733532.ttc",
    omnibus:
      "https://www.animefever.tv/storage/app/fonts/public/5de/6bc/1b9/5de6bc1b94d81318931388.ttc",
    "agilita w02 black condensed":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6bd/d8b/5de6bdd8ba489161749676.ttf",
    "alegreya sans":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6bd/edd/5de6bdedde844329026166.otf",
    amethysta:
      "https://www.animefever.tv/storage/app/fonts/public/5de/6bd/fd3/5de6bdfd3ebbf447677178.ttf",
    "cac moose":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6be/28a/5de6be28a4b92178590263.ttf",
    "frank reaction":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6be/417/5de6be417fcbc047002168.ttf",
    "kozuka gothic pro m - eng":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6be/859/5de6be8594033636754676.ttf",
    "love live v909":
      "https://www.animefever.tv/storage/app/fonts/public/5de/6be/99e/5de6be99ea144434870642.ttf",
    "quattrocento sans":
      "https://www.animefever.tv/storage/app/fonts/public/5e0/0d5/7af/5e00d57af2d9f054754873.ttc",
    "homework smart":
      "https://www.animefever.tv/storage/app/fonts/public/5e0/0d5/d57/5e00d5d577911146543136.ttf",
    heartbreaker:
      "https://www.animefever.tv/storage/app/fonts/public/5e0/0d6/813/5e00d68135974973443685.ttf",
    josschrift:
      "https://www.animefever.tv/storage/app/fonts/public/5e0/0d6/aa5/5e00d6aa531b0568045993.ttf",
    "a-otf takahand std b":
      "https://www.animefever.tv/storage/app/fonts/public/5e0/0d9/481/5e00d948161aa676919328.otf",
    "lauren c. brown":
      "https://www.animefever.tv/storage/app/fonts/public/5e0/0da/270/5e00da2700110144570987.ttf",
    express:
      "https://www.animefever.tv/storage/app/fonts/public/5e0/0da/76d/5e00da76ddcc0428165036.ttf",
    kirinashi:
      "https://www.animefever.tv/storage/app/fonts/public/5e1/fd1/e97/5e1fd1e9714a2180903167.ttc",
    "dinneuzeitgrotesk-light":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/426/e7e/5e2426e7e4cd2179951315.ttf",
    "arno pro smtext":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/427/156/5e2427156290c222787842.otf",
    "mercurius ct std medium":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/427/4be/5e24274beb9d4802059404.ttf",
    daunpenh:
      "https://www.animefever.tv/storage/app/fonts/public/5e2/427/749/5e24277494aba777315192.ttf",
    "dfkanteiryu-xb":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/427/a15/5e2427a152697891907836.ttc",
    "joshiraku op":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/428/0bb/5e24280bb52fa065080060.ttf",
    fx勘亭流江戸文字:
      "https://www.animefever.tv/storage/app/fonts/public/5e2/428/fb7/5e2428fb74527419673546.ttf",
    fxイーマ513:
      "https://www.animefever.tv/storage/app/fonts/public/5e2/429/257/5e24292577c19133233124.ttf",
    "fx\u6b63\u6977\u66f8\u4f53-m":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/429/44b/5e242944b8193393351012.ttf",
    fxイーマ310:
      "https://www.animefever.tv/storage/app/fonts/public/5e2/429/599/5e24295994ca5090132460.ttf",
    "top secret":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/867/f6b/5e2867f6b82aa247771415.ttf",
    "kozuka mincho pr6n en b":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/868/277/5e2868277b342354878307.otf",
    "dfgtfleisho-w9-kampfer":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/868/4aa/5e28684aa7ec9005945386.ttf",
    "odense xbold":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/a5a/b0b/5e2a5ab0b9132907654742.ttc",
    "book antiqua":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/a5a/f14/5e2a5af143a5a265184605.ttf",
    "arnovaitc tt":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/a5b/391/5e2a5b391fe93062865451.ttf",
    clannad:
      "https://www.animefever.tv/storage/app/fonts/public/5e2/a5b/680/5e2a5b680b40e374971614.ttf",
    fj平成極太丸ゴシック体:
      "https://www.animefever.tv/storage/app/fonts/public/5e2/a5c/dd8/5e2a5cdd863fe340920306.ttf",
    benguiatgothicctt:
      "https://www.animefever.tv/storage/app/fonts/public/5e2/a5d/fbc/5e2a5dfbc41b9155278046.ttf",
    mikachan:
      "https://www.animefever.tv/storage/app/fonts/public/5e2/be3/37d/5e2be337d7ee4184836473.ttc",
    "mikachan-p":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/be3/37d/5e2be337d7ee4184836473.ttc",
    "mikachan-pb":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/be3/37d/5e2be337d7ee4184836473.ttc",
    "mikachan-ps":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/be3/37d/5e2be337d7ee4184836473.ttc",
    "aint nothing fancy":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/be2/9d9/5e2be29d9f4a0703703569.ttf",
    "street corner bold":
      "https://www.animefever.tv/storage/app/fonts/public/5e2/be4/1cc/5e2be41cc399d110174982.ttf",
    surface:
      "https://www.animefever.tv/storage/app/fonts/public/5e2/be4/762/5e2be4762a61c575003232.otf",
    maharani:
      "https://www.animefever.tv/storage/app/fonts/public/5e3/102/45c/5e310245c77ab143699562.otf",
    "you rook marbelous":
      "https://www.animefever.tv/storage/app/fonts/public/5e3/75a/b99/5e375ab998e45755136251.ttf",
    safrandeathparade:
      "https://www.animefever.tv/storage/app/fonts/public/5e3/75b/022/5e375b022dc91890031203.ttc",
    nanumgothic:
      "https://www.animefever.tv/storage/app/fonts/public/5e3/ad5/f00/5e3ad5f0000e4189346763.ttc",
    nanumgothicextrabold:
      "https://www.animefever.tv/storage/app/fonts/public/5e3/ad5/f00/5e3ad5f0000e4189346763.ttc",
    "hygothic-medium":
      "https://www.animefever.tv/storage/app/fonts/public/5e3/ad9/d1e/5e3ad9d1e7500190333355.ttf",
    "source han serif k":
      "https://www.animefever.tv/storage/app/fonts/public/5e3/adb/ba1/5e3adbba184ba404910733.otf",
    applegothic:
      "https://www.animefever.tv/storage/app/fonts/public/5e3/adc/ae9/5e3adcae9d1c9429282645.ttf",
    baldo:
      "https://www.animefever.tv/storage/app/fonts/public/5e4/1df/91f/5e41df91f386c188132114.otf",
    grobold:
      "https://www.animefever.tv/storage/app/fonts/public/5e4/245/1a5/5e42451a53a6f997754630.ttf",
    "german beauty":
      "https://www.animefever.tv/storage/app/fonts/public/5e4/245/682/5e42456828492949445669.ttf",
    gosmicksans:
      "https://www.animefever.tv/storage/app/fonts/public/5e4/245/7fe/5e42457fec750225481999.ttf",
    japestyle:
      "https://www.animefever.tv/storage/app/fonts/public/5e4/245/a63/5e4245a63dbe6700095179.ttf",
    margarine:
      "https://www.animefever.tv/storage/app/fonts/public/5e4/245/b7e/5e4245b7e7292968676681.ttf",
    formata:
      "https://www.animefever.tv/storage/app/fonts/public/5e4/245/d65/5e4245d65cfce364994612.ttf",
    "it ain't rocket science":
      "https://www.animefever.tv/storage/app/fonts/public/5e4/245/f17/5e4245f17b851757827120.ttf",
    "faraco hand":
      "https://www.animefever.tv/storage/app/fonts/public/5e4/246/060/5e424606045ed186431103.ttf",
    "meta-medium":
      "https://www.animefever.tv/storage/app/fonts/public/5e4/2a3/88e/5e42a388e2493150247724.ttf",
    milocha:
      "https://www.animefever.tv/storage/app/fonts/public/5e4/2a3/af2/5e42a3af2279a635031689.otf",
    "elected office":
      "https://www.animefever.tv/storage/app/fonts/public/5e4/3f7/5bd/5e43f75bd3c81857933110.ttf",
    amira:
      "https://www.animefever.tv/storage/app/fonts/public/5e4/3f7/6fe/5e43f76fe9b8d423992203.otf",
    andalus:
      "https://www.animefever.tv/storage/app/fonts/public/5e4/3f7/7fd/5e43f77fdae6c274492901.ttf"
  };
  return availablefonts;
};

if (typeof exports !== "undefined") {
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = fonts;
  }
}