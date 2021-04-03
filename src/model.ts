const localStorageKeyName = 'recordList'
const model = {
    clone(data:RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data)) ;
    },
    fetch(){  //拿到
        return JSON.parse(window.localStorage.getItem('recordList')||'[]') as RecordItem[];
    },
    save(data:RecordItem[]){  //保存
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
};

export default model;
