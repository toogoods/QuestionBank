import { Button } from "antd";

const Top: React.FC<{
    className?: string,
    add: () => void
}> = (props: any) => {

    const addClick = () => {
        props.add();
    }

    return <div className={props.className}>
        <Button  type="primary" onClick={addClick}>添加</Button>
    </div>
}

export default Top;