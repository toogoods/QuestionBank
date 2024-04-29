import Top from "@/components/top";
import { getPermissionList } from "@/services/permission";
import { useAntdTable, useBoolean } from "ahooks";
import { Layout, Modal, Table } from "antd";
import { useState } from "react";
import styles from "./index.less";

const Permission: React.FC = () => {

    const { tableProps } = useAntdTable(getPermissionList);
    const [show, {set}] = useBoolean(false);
    const [title, setTitle] = useState("添加权限");

    const addClick = () => {
        set(!show);
    }

    const onOk = () => {
        set(false);
    }

    const onCancel = () => {
        set(false);
    }

    const column = [
        {
            title: "ID",
            dataIndex: 'id',
            key: 'id'
        }, {
            title: "权限名称",
            dataIndex: 'name',
            key: 'name'
        }, {
            title: "权限描述",
            dataIndex: 'description',
            key: 'desc'
        }, {
            title: "操作",
            dataIndex: 'action',
            key: 'action'
        }
    ]

    return <>
        <Layout>
            <Top className={styles.top} add={addClick}></Top>
            <Table className={styles.questionTable} columns={column} rowKey="id" {...tableProps} />
            <Modal
                title={title}
                open={show}
                centered={true}
                onOk={onOk}
                onCancel={onCancel}
            >
                
            </Modal>
        </Layout> 
    </>;
}

export default Permission;