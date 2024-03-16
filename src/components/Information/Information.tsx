import { HeartOutlined, PlusCircleOutlined } from '@ant-design/icons'
import styles from './Information.module.css'

const Information = () => {
  return (
    <div className={styles.container}>
        <div className={styles.flex}>
            <div className={styles.infoContainer}>
            <HeartOutlined className={styles.icons}/>
            <p>You can like your favorite movies and keep track of them effortlessly!</p>
            </div>
            <div className={styles.infoContainer}>
            <PlusCircleOutlined className={styles.icons}/>
            <p>You can reserve tickets or purchase them online, ensuring your movie experience is seamless
                and stress-free</p>
            </div>
        </div>
    </div>
  )
}

export default Information