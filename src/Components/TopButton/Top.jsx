import styles from "./top.module.css";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import IconButton from "@material-ui/core/IconButton";
import { animateScroll } from "react-scroll";
export const Top = () => {
    return (
        <div className={styles.wrapper}>
            <IconButton onClick={() => {
              animateScroll.scrollToTop();
            }}>
                <ArrowCircleUpRoundedIcon />
            </IconButton>
        </div>
    )
}
