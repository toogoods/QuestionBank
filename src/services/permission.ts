import { api } from ".";

interface Item {
    id: number;
    name: string;
    description: string;
}

interface Result {
    total: number;
    list: Item[];
}

/**
 * 获取权限列表
 * @param {Object} param0 - 请求参数对象
 * @param {number} param0.current - 当前页码
 * @param {number} param0.pageSize - 每页显示数量
 * @returns {Promise<Result>} - 包含权限列表和总数的Promise对象
 */
export const getPermissionList = ({current, pageSize}): Promise<Result> => {
    return fetch(`${api.host}/permission/all`).then((res) => res.json()).then((res) => {
        console.log(res);
        
        return {
            total: res.length,
            list: res
        }
    });
}
