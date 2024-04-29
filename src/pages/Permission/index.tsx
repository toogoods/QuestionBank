import { PageContainer } from "@ant-design/pro-components";
import Permission from "./permission";

const PermissionPage: React.FC = () => {
    return (
        <PageContainer
            ghost
        >
            <div className="">
                <Permission />
            </div>
        </PageContainer>
    );
}

export default PermissionPage;