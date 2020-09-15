let items=[];
let key=0;
module.exports=class Blog{

        constructor(title,describe,name,email){
            this.title=title,
            this.describe=describe,
            this.name=name,
            this.email=email
            key=key+1;
            //console.log(key);

        }

        save(){
            this.id=key;
            items.push(this);
        }

        static fetchall(){
            return items;
        }

        static fetchsingle(id){
            const item1=items.find(item=>item.id ==id);
            return item1;
        }
        static delete(id){
            const item= items.filter(item=>item.id != id );
            console.log(item)
            items=item
            
        }

        //UPDATE HOW ??
        static updateAtid(id,title,describe,name,email){
            const index=items.findIndex(item=>item.id==id);
            items[index].title=title;
             items[index].email=email;
             items[index].describe=describe;
             items[index].name=name;


        }

}