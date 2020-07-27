export default {
    install(Vue, options) {
        function response (json) {
            if (json) {
                return {
                    succes: true,
                    some: 'hehe',
                    status: json.status,
                    status_code: json.status_code,
                    message: json.message,
                    data: json.data
                }
            }
        }
        Vue.prototype.$res = response
    }
}