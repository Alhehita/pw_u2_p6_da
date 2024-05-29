const rootElement = document.getElementById('root');


const element = React.createElement('div',
    {
        className: 'container',
        style: { fontSize: '30px' }
    }, 
    'Hola mundo desde React'
);
ReactDOM.render(element, rootElement);
