import { Ajax } from "../utils/ajax";

export class TaskComments {
    constructor(target){
        this.target = target;
        this.render();
        Ajax.get(
            'http://localhost:4001/comments',
            (list) => {
                this.renderList(list);
            },
            (e) => {
                console.log(e)
            }
        );
    }

    sendData() {
        Ajax.post(
            'http://localhost:4001/comments',
            {
                title: this.input.value
            },
            (resp) => {
                console.log(resp);

            },
            (e) => {
                console.log(e)
            }
        )
    }

    renderListItem(item) {
        const li = document.createElement('li');
        li.textContent = item.title;
        this.ul.appendChild(li);
    }

    render() {
        this.form = document.createElement('form');
        this.input = document.createElement('input');
        this.ul = document.createElement('ul');

        this.input.placeholder = 'Enter task...';

        this.form.addEventListener('submit', (event) => {
            console.log('event');
            event.preventDefault();
            this.sendData();
        });

        this.form.appendChild(this.input);
        this.target.appendChild(this.form);
        this.target.appendChild(this.ul);
    }

    renderList(list) {
        list.forEach((item) => {
            this.renderListItem(item);
        })
    }
}