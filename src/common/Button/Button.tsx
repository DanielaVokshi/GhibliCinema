import styles from './Button.module.css'

interface Props {
   label: string;
}

const Button:React.FC<Props> = ({label}) => {
  return (
    <button className={styles.button}>{label}</button>
  )
}

export default Button