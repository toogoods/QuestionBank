import { Form, Input } from "antd";

type FiledType = {
    name?: string;
    content?: string;
    answer?: string;
}

const QuestionForm: React.FC = () => {
    return <>
        <Form>
            <Form.Item<FiledType>
                label="name"
                name="name"
                rules={[{required: true, message: "Please input the question name"}]}>
                    <Input />
            </Form.Item>
            <Form.Item<FiledType>
                label="content"
                name="content"
                rules={[{required: true, message: "Please write the question"}]}
                >
                    <Input />
            </Form.Item>
            <Form.Item<FiledType>
                label="answer"
                name="answer"
                >
                    <Input.TextArea placeholder="If has answer, Please input"  />
            </Form.Item>
        </Form>
    </>
}

export default QuestionForm;