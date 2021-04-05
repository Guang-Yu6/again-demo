import clone from  '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
    data:[] as RecordItem[],
    created(record:RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createdAt = new Date()
        this.data.push(record2);  // 更新数据
    },
    fetch(){  //拿到
        this.data = JSON.parse(window.localStorage.getItem('recordList')||'[]') as RecordItem[];
        return this.data;
    },
    save(){  //保存
        window.localStorage.setItem(localStorageKeyName,
          JSON.stringify(this.data));
    }
};

export default recordListModel;
