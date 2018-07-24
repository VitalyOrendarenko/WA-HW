import * as React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
    render() {
        return <header className='page-header'>Here will be page header</header>
}
}

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        };

        Ajax.get(
            'http://localhost:4001/list',
            (resp) => {
                this.setState({
                    tasks: resp
                });
            },
            (e) => {
                console.log(e);
            }
        )
    }
    render() {
        const listItemsElements = ();

        this.state.tasks.forEach((item) => {
            const li = <li>{item.title}</li>

            listItemsElements.push(li);
        });

        return <main className='page-content'>{ listItemsElements }</main>
    }
}

class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Content />
        </div>
    }
}

render(<App />, document.querySelector('#app'));

// render(<h1>Hello REACT</h1>, document.querySelector('#app'));