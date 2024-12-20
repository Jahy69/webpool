window.onload = () => {
    const { createApp } = Vue;
    let now = new Date()


    createApp({
        data() {
            return {
                message: 'The current time is ' + now.getHours().toString() + ':' + now.getMinutes().toString() +'.'
            };
        }
    }).mount('#app');
}
