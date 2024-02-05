class ClientComponent {
    constructor(url){
        this.url = url;
    }
    async getData(){
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}

//decorator
class ClientDecorator{
    constructor(ClientComponent){
        this.ClientComponent = ClientComponent;
    }
    async getData(){
        return await this.ClientComponent.getData();
    }
}

//decorator 1
class UpperCaseClientDecorator extends ClientDecorator{
    async getData(){
        const data = await super.getData();
        const newData = data.map(e =>{
            e.title = e.title.toUpperCase();
            return e;
        })

        return newData;
    }
}

//decorator 2
class HtmlClientDecorator extends ClientDecorator{
    async getData(){
        const data = await super.getData();
        const newData = data.map(e =>{
            e.title = `<h1>${e.title}</h1>`;
            e.thumbnailUrl = `<img src="${e.thumbnailUrl}" alt="${e.title}">`;
            return e;
        })
        return newData; 
    }
}

//IIFE
(async ()=>{
    //console.log('Decorator Pattern');
    const url = ("https://jsonplaceholder.typicode.com/photos");
    const client = new ClientComponent(url);
    const data = await client.getData();
   // console.log(data);

    const upperCaseClient = new UpperCaseClientDecorator(client);
    const upperCaseData = await upperCaseClient.getData();
    //console.log(upperCaseData);

    const htmlClient = new HtmlClientDecorator(upperCaseClient);
    const htmlData = await htmlClient.getData();

    divContent1.innerHTML = htmlData.reduce((acc, e) => {
       return acc + e.title + e.thumbnailUrl; 
    }, "");

    const htmlClient2 = new HtmlClientDecorator(client);
    const htmlData2 = await htmlClient2.getData();
    divContent2.innerHTML = htmlData2.reduce((acc, e) => {
        return acc + e.title + e.thumbnailUrl; 
     }, "");
})();