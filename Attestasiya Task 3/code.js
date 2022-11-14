class Message {
    constructor(author, time, text) {
        this.author = author;
        this.time = time;
        this.text = text
    }

    toString() {
        return this.text
    }
}



class Messenger extends Message {
    constructor(author, time, text, messages) {
        super(author, time, text);
        this.messages = messages;
    }

    send(author, text) {
        this.author = author
        this.text = text
    }
    show_history() {


        function gettime() {
            let now = new Date();
            return `${now.getHours()}:${now.getMinutes()}`
        }
        this.time = gettime()

        this.messages = this.time + ' ' + this.author + ':' + this.text
        const b = document.querySelector('.history')
        const c=document.createElement('br')
        b.append(this.messages)
        b.append(c)

    }


}

const a = document.querySelector('.btn')

a.addEventListener(
    'click' ,(e)=>{
        e.preventDefault();
        show();
    }
);


function show() {
  
    const d = document.querySelector('.Author')
    const e = document.querySelector('.metn')
    let messenger = new Messenger()
    messenger.send(d.value, e.value)
    messenger.show_history()

}
