class rkeyManager {
    constructor() {
        this.serverUrl = ['https://llob.linyuchen.net/rkey', 'http://napcat-sign.wumiao.wang:2082/rkey']
        this.rkeyData = {
            group_rkey: "string",
            private_rkey: "string",
            expired_time: 0
        }
    }

    async getRkey() {
        if (this.isExpired()) {
            try {
                await this.refreshRkey();
            } catch (e) {
                console.log("rkey获取失败" + e)
            }
        }
        return this.rkeyData ;
    }

    async refreshRkey() {
        for (const url of this.serverUrl) {
            try {
                const response = await fetch(url)
                if (!response.ok) return console.log("rkey获取失败")
                const data = await response.json()
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }
    }

    isExpired() {
        return new Date().getTime() / 1000 > this.rkeyData.expired_time
    }

}

module.exports={rkeyManager}