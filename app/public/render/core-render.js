!function(){var t={g:function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}()};const i=Object.getPrototypeOf(t.g)||t.g;function s(){return i&&i.$topon_sdk?i.$topon_sdk.api:null}const d={main:{entry:{adProxyEvent:{onInit:async function(){this.handleAdInit()}},handleAdInit:function(){this.onSendTk("AD_LOAD")},onSendTk:function(t){}}},54:{native:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var t=s()["ad"];if(this.provider=t.getProvider(),"vivo"!=this.provider.toLowerCase())this.adError({code:9e3});else{var i={adUnitId:this.adOption.unit_id,type:"native"},e=this.adExtra["channelId"];e&&(i.channel=e),this.dispatchSendEvent({type:"AD_REQUEST"});try{t.preloadAd({...i,success:t=>{this.adList=t.adList,this.adListIndexInUse=0,this.adLoad()},fail:(t,i)=>{205===i?(this.adList=t.adList,this.adListIndexInUse=0,this.adLoad()):this.adError(t)}})}catch(t){this.adError({code:2e3,msg:"preload广告服务初始化失败"})}}},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},getAd(){var t;return this.ready?(t=this.adList[this.adListIndexInUse]||{},this.adListIndexInUse++,t||(this.ready=!1),t):null},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",{isSelfRendering:!0}),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.$emit("adShow",t)},adClick(t){this.$emit("adClick",t)},adClose(t){this.$emit("adClose",t)},adError(t){var i=this.adOption._request_id+"/"+this.adOption._unit_id;this.lockAdError!==i&&(this.lockAdError=i,this.ready=!1,this.$emit("adError",{...t,msg:t.errMsg||t.msg,code:t.errCode||t.code}),this.timerId&&clearTimeout(this.timerId))},reportShow(){this.dispatchSendEvent({type:"AD_SHOW"}),this.dispatchSendEvent({type:"AD_IMPRESSION"})},reportClick(){this.dispatchSendEvent({type:"AD_CLICK"})},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}},rewardedVideo:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var t=s()["ad"];if(this.provider=t.getProvider(),"vivo"!=this.provider.toLowerCase())this.adError({code:9e3});else{this.dispatchSendEvent({type:"AD_REQUEST"});try{var{nwFirmId:i,channelId:e=""}=this.adExtra,d={adUnitId:this.adOption.unit_id};"vivo"==this.provider.toLowerCase()&&54==+i&&e&&(d.channel=e),this.ad=t.createRewardedVideoAd(d),this.ad.onLoad(t=>{this.adLoad(t)}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createRewardedVideoAd广告服务初始化失败"})}this.ad.load()}},checkNwTimeout(){const t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001,msg:"超时",timeout:t})},t)},show(){this.ready&&(this.ad.show().then(t=>{this.adShow(t)}),this.ready=!1)},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",t),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.ready=!1,this.$emit("adShow",t),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",t),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){var i=t.isEnded;this.$emit("adClose",{reward:i}),i&&this.$emit("adReward",{e:t})},adError(t){this.ready=!1,this.$emit("adError",{...t,msg:t.errMsg||t.msg,code:t.errCode||t.code}),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}},banner:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var t=s()["ad"];if(this.provider=t.getProvider(),"vivo"!=this.provider.toLowerCase())this.adError({code:9e3});else{this.dispatchSendEvent({type:"AD_REQUEST"}),this.adLoadSucceed=!1,this.ready=!1;try{var i={adUnitId:this.adOption.unit_id};this.ad=t.createBannerAd(i),this.ad.onLoad(t=>{console.log("banner填充成功回调",t),this.adLoad()}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createBannerAd广告服务失败"})}this._show()}},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},_show(){this.ad&&this.ad.show().then(()=>{this.adShow()},t=>{console.log(t)})},adLoad(t){this.adLoadSucceed||(this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",{e:t||{},isSelfRendering:!1}),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.dispatchSendEvent({type:"AD_SHOW"}),this.dispatchSendEvent({type:"AD_IMPRESSION"}),this.timerId&&clearTimeout(this.timerId))},adShow(t){this.$emit("adShow",t)},adClick(t){this.$emit("adClick",t),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){this.$emit("adClose",t)},adError(t){this.ready=!1;t={...t,msg:t.errMsg||t.msg,code:t.errCode||t.code};this.$emit("adError",t),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){this.$dispatch("dispatchSendReport",{type:t})}},interstitial:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){console.log("拆分在adatper.interstitial.js里的load");var t=s()["ad"];if(this.provider=t.getProvider(),"vivo"!=this.provider.toLowerCase())this.adError({code:9e3});else{this.dispatchSendEvent({type:"AD_REQUEST"});try{var i={adUnitId:this.adOption.unit_id};this.ad=t.createInterstitialAd(i),this.ad.onLoad(t=>{this.adLoad()}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createInterstitialAd广告服务失败"})}}},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},show(){this.ad&&this.ready&&this.ad.show().then(t=>{this.adShow(),console.log("插屏广告show成功")},()=>{console.log("插屏广告show失败")})},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",t),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.ready=!1,this.$emit("adShow",t),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",t),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){this.$emit("adClose",t)},adError(t){this.ready=!1;t={...t,msg:t.errMsg,code:t.code||t.errCode};this.$emit("adError",t),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){this.$dispatch("dispatchSendReport",{type:t})}},splash:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var t=s()["ad"];if(this.provider=t.getProvider(),"vivo"!=this.provider.toLowerCase())this.adError({code:9e3});else{var i={adUnitId:this.adOption.unit_id,type:"native"},e=this.adExtra["channelId"];e&&(i.channel=e);try{t.preloadAd({...i,success:t=>{this.adList=t.adList,this.adListIndexInUse=0,this.adLoad()},fail:(t,i)=>{205===i?(this.adList=t.adList,this.adListIndexInUse=0,this.adLoad()):this.adError(t)}})}catch(t){this.adError({code:2e3,msg:"preload广告服务初始化失败"})}}},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},handleChangeScreen(t){var i=this.$element("ad-stack-container-"+this.adExtra.unit.unit_id);i&&i.requestFullscreen({screenOrientation:t})},handleProxyScreen(){var t;this.isTemplateRendering&&(t=this.getCurrentOrientation(),"2"===this.getOrientationValue?"portrait"===t&&this.handleChangeScreen("landscape"):"landscape"===t&&this.handleChangeScreen("portrait"))},getCurrentOrientation(){return this.$page.orientation},secondCountdown(i){if(this.isTemplateRendering){let t=i||5;this.countdown=t,this.countdownTimerId&&clearInterval(this.countdownTimerId),this.countdownTimerId=setInterval(()=>{t--,(this.countdown=t)<1&&(clearInterval(this.countdownTimerId),this.enableClose=!0,this.handleClose())},1e3)}},handleOnSkip(t){this.isSkipAble&&(this.handleClose(),t.stopPropagation&&t.stopPropagation())},handleOpenPermission(t){var i=s()["router"];i.push({uri:"hap://settings/permissions"}),t.stopPropagation&&t.stopPropagation()},handleClose(){var t=s()["router"],i=this.adConfig["entry"];this.countdownTimerId&&clearInterval(this.countdownTimerId),this.adClose(),t.replace({uri:i})},show(){this.isTemplateRendering&&this.ready&&(this.showAdTemplate=!0,this.screenTimerId&&clearTimeout(this.screenTimerId),this.screenTimerId=setTimeout(()=>{this.handleProxyScreen()},0))},getAd(){var t;return!this.ready||this.isTemplateRendering?null:(t=this.adList[this.adListIndexInUse]||{},this.adListIndexInUse++,t||(this.ready=!1),t)},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",{isSelfRendering:!0}),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.ready=!1,this.secondCountdown(this.getSkipTime),this.$emit("adShow",t),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",t)},adClose(t){this.$emit("adClose",t)},adError(t){var i=this.adOption._request_id+"/"+this.adOption._unit_id;this.lockAdError!==i&&(this.lockAdError=i,this.ready=!1,this.$emit("adError",{...t,msg:t.errMsg||t.msg,code:t.errCode||t.code}),this.timerId&&clearTimeout(this.timerId))},reportShow(){this.dispatchSendEvent({type:"AD_SHOW"}),this.dispatchSendEvent({type:"AD_IMPRESSION"})},reportClick(){this.dispatchSendEvent({type:"AD_CLICK"})},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}}},55:{native:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var{ad:t,device:i}=s();this.provider=t.getProvider(),"oppo"!=this.provider.toLowerCase()?this.adError({code:9e3}):(i=null!=(t=null==(i=null!=(t=null==i?void 0:i.platform)?t:{})?void 0:i.versionCode)?t:1e3,t=(null==(t=this.adOption)?void 0:t.unit_version)||"1",1112<=i&&"2"===t&&(this.isPreloadAd=!0),this.isPreloadAd?this.handlePreloadAd():this.createNativeAd())},handlePreloadAd(){var t=s()["ad"],i={adUnitId:this.adOption.unit_id,type:"native"};this.dispatchSendEvent({type:"AD_REQUEST"});try{t.preloadAd({...i,success:t=>{this.adLoad(t)},fail:(t,i)=>{205===i?this.adLoad(t):this.adError(t)}})}catch(t){this.adError({code:2e3,msg:"preload广告服务初始化失败"})}},createNativeAd(){console.log("load 1.0 ad.createNativeAd"),this.dispatchSendEvent({type:"AD_REQUEST"});try{var t=s()["ad"];this.ad=t.createNativeAd({adUnitId:this.adOption.unit_id}),this.ad.onLoad(t=>{this.adLoad(t)}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createNativeAd广告服务错误"})}this.ad.load()},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},getAd(){var t,i;return this.ready?(t=this.adListIndexInUse,i=this.adList[this.adListIndexInUse]||{},this.adListIndexInUse++,this.currentIndexUse=t,i||(this.ready=!1),i):null},adLoad(t){console.log("ad load e",t),this.ready=!0,this.adLoadSucceed=!0,this.adListIndexInUse=0,this.adList=t.adList,this.$emit("adLoad",{e:{},isSelfRendering:!0,nwUnitVersion:this.isPreloadAd?"2":"1"}),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.$emit("adShow",t)},adClick(t){this.$emit("adClick",t)},adClose(t){this.$emit("adClose",t)},adError(t){this.ready=!1;var i={...t,msg:t.errMsg||t.msg,code:t.errCode||t.code};1100!==t.errCode||this.isPreloadAd||(i.code=8e3),this.$emit("adError",i),this.timerId&&clearTimeout(this.timerId)},reportShow(){var t;null!=(t=this.adList[this.currentIndexUse])&&t.adId?(this.dispatchSendEvent({type:"AD_SHOW"}),this.dispatchSendEvent({type:"AD_IMPRESSION"}),this.isPreloadAd||this.ad.reportAdShow({adId:this.adList[this.currentIndexUse].adId})):console.log("上报失败，请传入adId")},reportClick(){var t;null!=(t=this.adList[this.currentIndexUse])&&t.adId?(this.dispatchSendEvent({type:"AD_CLICK"}),this.isPreloadAd||this.ad.reportAdClick({adId:this.adList[this.currentIndexUse].adId})):console.log("上报失败，请传入adId")},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}},rewardedVideo:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var t=s()["ad"];if(this.provider=t.getProvider(),"oppo"!=this.provider.toLowerCase())this.adError({code:9e3});else{this.dispatchSendEvent({type:"AD_REQUEST"});try{var i={adUnitId:this.adOption.unit_id};this.ad=t.createRewardedVideoAd(i),this.ad.onLoad(t=>{this.adLoad(t)}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createRewardedVideoAd广告服务初始化失败"})}this.ad.load()}},checkNwTimeout(){const t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001,msg:"超时",timeout:t})},t)},show(){this.ready&&(this.ad.show().then(t=>{this.adShow(t)}),this.ready=!1)},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",t),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.ready=!1,this.$emit("adShow",t),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",t),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){var i=t.isEnded;this.$emit("adClose",{reward:i}),i&&this.$emit("adReward",{e:t})},adError(t){this.ready=!1,this.$emit("adError",{...t,msg:t.errMsg||t.msg,code:t.errCode||t.code}),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}},banner:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var t=s()["ad"];if(this.provider=t.getProvider(),"oppo"!=this.provider.toLowerCase())this.adError({code:9e3});else{this.dispatchSendEvent({type:"AD_REQUEST"}),this.adLoadSucceed=!1,this.ready=!1;try{var i={adUnitId:this.adOption.unit_id};this.ad=t.createBannerAd(i),this.ad.onLoad(t=>{console.log("banner填充成功回调",t),this.adLoad()}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createBannerAd广告服务失败"})}this._show()}},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},_show(){this.ad&&this.ad.show().then(()=>{this.adShow()},t=>{console.log(t)})},adLoad(t){this.adLoadSucceed||(this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",{e:t||{},isSelfRendering:!1}),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.dispatchSendEvent({type:"AD_SHOW"}),this.dispatchSendEvent({type:"AD_IMPRESSION"}),this.timerId&&clearTimeout(this.timerId))},adShow(t){this.$emit("adShow",t)},adClick(t){this.$emit("adClick",t),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){this.$emit("adClose",t)},adError(t){this.ready=!1;t={...t,msg:t.errMsg||t.msg,code:t.errCode||t.code};this.$emit("adError",t),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){this.$dispatch("dispatchSendReport",{type:t})}},interstitial:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){console.log("拆分在adatper.interstitial.js里的load");var t=s()["ad"];if(this.provider=t.getProvider(),"oppo"!=this.provider.toLowerCase())this.adError({code:9e3});else{this.dispatchSendEvent({type:"AD_REQUEST"});try{var i={adUnitId:this.adOption.unit_id};this.ad=t.createInterstitialAd(i),this.ad.onLoad(t=>{this.adLoad()}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createInterstitialAd广告服务失败"})}}},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},show(){this.ad&&this.ready&&this.ad.show().then(t=>{this.adShow(),console.log("插屏广告show成功")},()=>{console.log("插屏广告show失败")})},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",t),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.ready=!1,this.$emit("adShow",t),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",t),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){this.$emit("adClose",t)},adError(t){this.ready=!1;t={...t,msg:t.errMsg,code:t.code||t.errCode};this.$emit("adError",t),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){this.$dispatch("dispatchSendReport",{type:t})}},splash:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var{ad:t,device:i}=s();this.provider=t.getProvider(),"oppo"!=this.provider.toLowerCase()?this.adError({code:9e3}):(i=null!=(t=null==(i=null!=(t=null==i?void 0:i.platform)?t:{})?void 0:i.versionCode)?t:1e3,t=(null==(t=this.adOption)?void 0:t.unit_version)||"1",1112<=i&&"2"===t&&(this.isPreloadAd=!0),this.isPreloadAd?this.handlePreloadAd():this.createNativeAd())},handlePreloadAd(){var t=s()["ad"],i={adUnitId:this.adOption.unit_id,type:"native"};this.dispatchSendEvent({type:"AD_REQUEST"});try{t.preloadAd({...i,success:t=>{this.adLoad(t)},fail:(t,i)=>{205===i?this.adLoad(t):this.adError(t)}})}catch(t){this.adError({code:2e3,msg:"preload广告服务初始化失败"})}},createNativeAd(){console.log("load 1.0 ad.createNativeAd"),this.dispatchSendEvent({type:"AD_REQUEST"});try{var t=s()["ad"];this.ad=t.createNativeAd({adUnitId:this.adOption.unit_id}),this.ad.onLoad(t=>{this.adLoad(t)}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createNativeAd广告服务错误"})}this.ad.load()},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},getAd(){var t,i;return this.ready?(t=this.adListIndexInUse,i=this.adList[this.adListIndexInUse]||{},this.adListIndexInUse++,this.currentIndexUse=t,i||(this.ready=!1),i):null},adLoad(t){console.log("ad load e",t),this.ready=!0,this.adLoadSucceed=!0,this.adListIndexInUse=0,this.adList=t.adList,this.$emit("adLoad",{e:{},isSelfRendering:!0,nwUnitVersion:this.isPreloadAd?"2":"1"}),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.$emit("adShow",t)},adClick(t){this.$emit("adClick",t)},adClose(t){this.$emit("adClose",t)},adError(t){this.ready=!1;var i={...t,msg:t.errMsg||t.msg,code:t.errCode||t.code};1100!==t.errCode||this.isPreloadAd||(i.code=8e3),this.$emit("adError",i),this.timerId&&clearTimeout(this.timerId)},reportShow(){var t;null!=(t=this.adList[this.currentIndexUse])&&t.adId?(this.dispatchSendEvent({type:"AD_SHOW"}),this.dispatchSendEvent({type:"AD_IMPRESSION"}),this.isPreloadAd||this.ad.reportAdShow({adId:this.adList[this.currentIndexUse].adId})):console.log("上报失败，请传入adId")},reportClick(){var t;null!=(t=this.adList[this.currentIndexUse])&&t.adId?(this.dispatchSendEvent({type:"AD_CLICK"}),this.isPreloadAd||this.ad.reportAdClick({adId:this.adList[this.currentIndexUse].adId})):console.log("上报失败，请传入adId")},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}}},56:{native:{adProxyEvent:{onInit:function(){this.dispatchSendEvent({type:"AD_REQUEST"}),this.checkNwTimeout()}},show(){this.ready?this.displayed=!0:console.log("isReady false")},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",{}),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"})},adShow(t){this.ready=!1,this.$emit("adShow",{}),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",{}),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){this.$emit("adClose",{})},adError(t){this.ready=!1;var i=t.stop?t.detail:t;this.$emit("adError",{...i,msg:t.msg||t.errMsg,code:t.code||t.type}),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}},rewardedVideo:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){try{this.ad=this.$app.$def.union_quick_app_sdk.createRewardedVideoAd({apid:this.adOption.placement_id,appid:this.adOption.app_id}),this.ad.onLoad(t=>{this.adLoad(t)}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onClick&&this.ad.onClick(t=>{this.adClick(t)}),this.ad.onError(t=>{this.ready=!1,this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createRewardedVideoAd广告服务错误"})}this.dispatchSendEvent({type:"AD_REQUEST"}),this.isShowCalled=!1,this.ad.load()},checkNwTimeout(){const t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001,msg:"超时",timeout:t})},t)},show(){this.ad&&this.ready&&(this.ad.show(),this.adShow(),this.ready=!1)},adLoad(t){this.isShowCalled||(this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",t),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId))},adShow(t){this.isShowCalled=!0,this.$emit("adShow",t),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",t),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){var i=t.isEnded;this.$emit("adClose",{reward:i}),i&&this.$emit("adReward",{e:t})},adError(t){var i;this.isShowCalled||(this.ready=!1,i=t.stop?t.detail:t,this.$emit("adError",{...i,msg:t.msg||t.errMsg,code:t.code||t.type}),this.timerId&&clearTimeout(this.timerId))},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}},interstitial:{adProxyEvent:{onInit:function(){this.load(),this.checkNwTimeout()}},load(){this.isShow=(new Date).getTime(),this.dispatchSendEvent({type:"AD_REQUEST"})},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",{}),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"})},adShow(t){this.ready=!1,this.$emit("adShow",{}),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",{}),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){this.$emit("adClose",{})},adError(t){this.ready=!1;t={...t.stop?t.detail:t,msg:t.errMsg,code:t.code||t.type};this.isShowCalled&&(t.code=1101),delete t.errCode,delete t.errMsg,this.$emit("adError",t),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){this.$dispatch("dispatchSendReport",{type:t})}},splash:{adProxyEvent:{onInit:function(){this.dispatchSendEvent({type:"AD_REQUEST"}),this.checkNwTimeout()}},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.loadError=!1,this.showClassName="union-ad-wraper--show",this.$emit("adLoad",t),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.ready=!1,this.$emit("adShow",t),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",t),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){this.loadError||this.$emit("adClose",t)},adError(t){this.loadError=!0,this.ready=!1;var i=t.stop?t.detail:t;this.$emit("adError",{...i,msg:t.msg||t.errMsg,code:t.code||t.type}),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}}},61:{native:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var t=s()["ad"];if(this.provider=t.getProvider(),"xiaomi"!=this.provider.toLowerCase())this.adError({code:9e3});else{this.dispatchSendEvent({type:"AD_REQUEST"});try{this.ad=t.createNativeAd({adUnitId:this.adOption.unit_id}),this.ad.onLoad(t=>{this.adLoad(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createNativeAd广告服务错误"})}this.ad.load()}},checkNwTimeout(){var t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001})},t)},getAd(){var t,i;return this.ready?(t=this.adListIndexInUse,i=this.adList[this.adListIndexInUse]||{},this.adListIndexInUse++,this.currentIndexUse=t,i||(this.ready=!1),i):null},adLoad(t){this.ready=!0,this.adLoadSucceed=!0,this.adListIndexInUse=0,this.adList=t.adList,this.$emit("adLoad",{e:{},isSelfRendering:!0}),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId)},adShow(t){this.$emit("adShow",t)},adClick(t){this.$emit("adClick",t)},adClose(t){this.$emit("adClose",t)},adError(t){this.ready=!1;t={...t,msg:t.errMsg||t.msg,code:t.errCode||t.code};this.$emit("adError",t),this.timerId&&clearTimeout(this.timerId)},reportShow(){var t;null!=(t=this.adList[this.currentIndexUse])&&t.adId?(this.dispatchSendEvent({type:"AD_SHOW"}),this.dispatchSendEvent({type:"AD_IMPRESSION"}),this.ad.reportAdShow({adId:this.adList[this.currentIndexUse].adId})):console.log("上报失败，请传入adId")},reportClick(){var t;null!=(t=this.adList[this.currentIndexUse])&&t.adId?(this.dispatchSendEvent({type:"AD_CLICK"}),this.ad.reportAdClick({adId:this.adList[this.currentIndexUse].adId})):console.log("上报失败，请传入adId")},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}},rewardedVideo:{adProxyEvent:{onInit:function(){this.handleAdInit(),this.checkNwTimeout()}},handleAdInit:function(){var t=s()["ad"];if(this.provider=t.getProvider(),"xiaomi"!=this.provider.toLowerCase())this.adError({code:9e3});else{this.dispatchSendEvent({type:"AD_REQUEST"});try{var i={adUnitId:this.adOption.unit_id};this.ad=t.createRewardedVideoAd(i),this.ad.onLoad(t=>{this.adLoad()}),this.ad.onClose(t=>{this.adClose(t)}),this.ad.onError(t=>{this.adError(t)})}catch(t){this.adError({code:2e3,msg:"createRewardedVideoAd广告服务错误"})}this.dispatchSendEvent({type:"AD_REQUEST"}),this.isShowCalled=!1,this.ad.load()}},checkNwTimeout(){const t=this.adOption._nw_timeout;this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout(()=>{this.adError({code:9001,msg:"超时",timeout:t})},t)},show(){this.ready&&(this.ad.show().then(t=>{this.adShow(t)}),this.ready=!1)},adLoad(t){this.isShowCalled||(this.ready=!0,this.adLoadSucceed=!0,this.$emit("adLoad",t),this.dispatchSendEvent({type:"AD_REQUEST_FILLED"}),this.timerId&&clearTimeout(this.timerId))},adShow(t){this.isShowCalled=!0,this.ready=!1,this.$emit("adShow",t),this.dispatchSendEvent({type:"AD_IMPRESSION"})},adClick(t){this.$emit("adClick",t),this.dispatchSendEvent({type:"AD_CLICK"})},adClose(t){var i=t.isEnded;this.$emit("adClose",{reward:i}),i&&this.$emit("adReward",{e:t})},adError(t){this.ready=!1,this.$emit("adError",{...t,msg:t.errMsg||t.msg,code:t.errCode||t.code}),this.timerId&&clearTimeout(this.timerId)},dispatchSendEvent({type:t}){var i=this.adExtra.unit;this.$dispatch("dispatchSendReport",{type:t,unit:i})}}}};function e(t,i){return console.log("program ctx",t),function(t,i){var e;console.log("init ctx",t),t&&t.$def&&!t.$def.topon_sdk&&(e={...t},t.$def.topon_sdk=Object.create(null),t.$def.topon_sdk.$app=e,t.$def.topon_sdk.components=d,t.$def.topon_sdk.appId=i.appId,t.$def.topon_sdk.appKey=i.appKey)}.call(null,t,i)}i&&(i.$topon_sdk=e)}();