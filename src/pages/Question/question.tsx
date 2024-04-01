import { useState } from "react";
import { Table, Layout, Modal } from "antd";
import { useAntdTable } from "ahooks";
import { getQuestionList } from "@/services/question"; 
import QuestionForm from "./form";
import Top from "./top";
import styles from "./index.less";

export const Question: React.FC = () => {
    const { tableProps } = useAntdTable(getQuestionList);
    let [show, setShow] = useState(false);
    let [title, setTitle] = useState("设置标题");
    const column = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '标题',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '内容',
            dataIndex: 'content',
            key: 'content'
        }
    ];
    

    const addClick = () => {
        setShow(!show);
    }

    const onOk = () => {
        setShow(false);
    }

    const onCancel = () => {
        setShow(false);
    }

    return <Layout>
        <Top className={styles.top} add={addClick}></Top>
        <Table className={styles.questionTable} columns={column} rowKey="id" {...tableProps} />
        <Modal
            title={title}
            open={show}
            centered={true}
            onOk={onOk}
            onCancel={onCancel}
        >
            <QuestionForm />
        </Modal>
    </Layout> 
};

export default Question;