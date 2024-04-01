import {PageContainer} from '@ant-design/pro-components';
import styles from './index.less';
import Question from './question';

const QuestionPage: React.FC = () => {
    return (
        <PageContainer ghost>
            <div className={styles.container}>
                <Question />
            </div>
        </PageContainer>
    )
}

export default QuestionPage;