function customRender(reactElement, container){
    /* BASIC CODE 
    //create an element 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    //append the element to the container
    container.appendChild(domElement)
    */
   // optimised code 
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
        if(prop === 'children'){
            continue
        }
        domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
