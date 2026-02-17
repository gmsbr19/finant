import { Ellipsis, Pencil, Trash2, X } from 'lucide-react';
import IconButton from '../ui/IconButton';
import * as styles from './TransactionDetailsModal.css'
import * as typography from '@/styles/typography.css'
import { vars } from '@/styles/theme.css';
import Divider from '../ui/Divider';

const TransactionDetailsModal = () => {
    return (<div className={styles.overlay}>
        <div className={styles.modalCard}>
            <div className={styles.topMenu}>
                <span></span>
                <span className={typography.h3}>Detalhes</span>
                <div className={styles.closeButtonContainer}>
                    <IconButton Icon={Ellipsis} />
                    <IconButton Icon={X} hoverColor={vars.colors.danger} />
                </div>
            </div>
            <Divider />
            <div className={styles.body}>
                <div className={styles.mainInfo}>
                    <span className={typography.h2}>Teste</span>
                    <span className={typography.moneyL}>R$ 269,99</span>
                </div>
            </div>
            <Divider />
            <div className={styles.footer}>
                <IconButton Icon={Pencil} />
            </div>
        </div>
    </div>)
}
 
export default TransactionDetailsModal;