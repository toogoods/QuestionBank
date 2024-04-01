

interface Item {
    id: number;
    name: string;
    context: string;
}

interface Result {
    total: number;
    list: Item[];
} 

export const getQuestionList = ({current, pageSize}): Promise<Result> => {
    const query = `page=${current}&size=${pageSize}`;
    return fetch(`/api/v1/queryQuestionList?${query}`).then((res) => res.json()).then((res) => {
        console.log(res);
        
        return {
            total: res.data.list.length,
            list: res.data.list
        }
    });
}

export const addQuestion = (item: Item): Promise<Result> => {
    return fetch(`/api/v1/addQuestion`, {
        body: JSON.stringify(item)
    }).then((res) => res.json()).then((res) => {
        return {
            total: res.data.list.length,
            list: res.data.list
        }
    })
}