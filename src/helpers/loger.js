import Vue from 'vue';

export default {

    /** color ref
     * - error #E57373
     * - success #81C784 
     * - info #4DD0E1
     * - warn #FFF176
     * */

    install(Vue, options) {
        const logFactory = {
            error(...text) {
                console.log(`%c error 😱 : `, 'font-weight: bold;background:#E57373;border-radius:5%;font-family: arial');
                console.error('\t', ...text)
                console.log(`%c-------------------`, 'color:#E57373');
            },
            success(...contents) {
                console.log(`%c success 😁 : `, 'font-weight: bold;background:#81C784;border-radius:5%;font-family: arial');
                console.log('\t', ...contents)
                console.log(`%c-------------------`, 'color:#81C784');
            },
            info(...contents) {
                console.log(`%c info 🧐 : `, 'font-weight: bold;background:#4DD0E1;border-radius:5%;font-family: arial;color:black');
                console.info('\t', ...contents)
                console.log(`%c-------------------`, 'color:#4DD0E1');
            },
            warn(...contents) {
                console.log(`%c warn 🤔 : `, 'font-weight: bold;background:#FFF176;border-radius:5%;font-family: arial;color:black');
                console.warn('\t', ...contents)
                console.log(`%c-------------------`, 'color:#FFF176');
            },
            table(arrayOfObject) {
                if (typeof arrayOfObject == "object") {
                    console.log(`%c table 😍 : `, 'font-weight: bold;background:#90A4AE;border-radius:5%;font-family: arial;color:black');
                    console.table(arrayOfObject)
                    console.log(`%c-------------------`, 'color:#90A4AE');
                }
                else {
                    console.log(`%c error 😱 : `, 'font-weight: bold;background:#E57373;border-radius:5%;font-family: arial');
                    console.error('please insert array of object variable')
                    console.log(`%c-------------------`, 'color:#E57373');
                }
            },
            setup() {
                var styleArray = [
                    'background-image:    url("https://media.giphy.com/media/2dQ3FMaMFccpi/giphy.gif")',
                    'background-size: cover',
                    'color: #fff',
                    'padding: 10px 20px',
                    'line-height: 35px',
                    'width : 70px',
                    'height : 70px',
                    'border : 5px solid black'
                ];
                console.log('%cI love you!', styleArray.join(';'));

            },
            res(json) {
                if (json.status_code || json.status) {
                    let mainStyle = 'background:#4DD0E1;border-radius:5%;font-family: arial;color:black'
                    let extendedMainStyle = ""
                    let mainText = ''

                    // basic condition 
                    let status_code = json.status_code || 'NOT_SET';
                    let status = json.status || 'NOT_SET';
                    let message = json.message || 'NOT_SET';

                    if (status_code != 'NOT_SET' || message != 'NOT_SET' || status != 'NOT_SET') {
                        mainText = `%c ${json.status_code} ${json.status} 🤔 : %c${json.message} `
                        mainStyle = 'background:none'
                        console.log(`%c ${json.status_code} ${json.status} 🤔 : %c ${json.message} `, 'font-weight: bold;background:#4DD0E1;border-radius:5%;font-family: arial;color:black', extendedMainStyle);
                    }

                    if (json.data) {
                        console.log(`%c data 🤔 : `, 'font-weight: bold;background:#4DD0E1;border-radius:5%;font-family: arial;color:black');
                        console.log('\t', json.data)
                    }
                    console.log(`%c-------------------`, 'color:#4DD0E1');
                }
            }
        }
        const { error, info, success, warn, table, res, setup } = logFactory
        // set to prototype vue js
        Vue.prototype.$success = success;
        Vue.prototype.$error = error;
        Vue.prototype.$info = info;
        Vue.prototype.$warn = warn;
        Vue.prototype.$table = table;
        Vue.prototype.$res = res;
        Vue.prototype.$setup = setup;





        if (process.env.NODE_ENV == 'development') {
            if (options) {
                // set to global variabel
                if (options.setGlobal) {
                    window.success = success;
                    window.error = error;
                    window.info = info;
                    window.warn = warn;
                    window.table = table;
                    window.res = res;
                    window.setup = setup;
                }

            } else {
                logFactory.warn('you r not using global logger \n please access method using this.$success, this.$log and etc')
            }
        }
        else {
            logFactory.info('App in production mode, dont be naughty')
        }






    }
}