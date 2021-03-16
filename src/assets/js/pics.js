import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";

const PICS = {
    LOGO: __imgPath + "image/rank/common/logo.png",
    cover : function (id){
        return __imgPath + "image/rank/cover/" + id + '.png'
    },
    boss : function (id){
        return __imgPath + "image/rank/boss/" + id + '.png'
    },
    version : function (id){
        return __imgPath + "image/rank/version/" + id + '.png'
    },
    logos : function (val){
        return __imgPath + "image/rank/logos/" + val + '.png'
    }
};

export default PICS;
