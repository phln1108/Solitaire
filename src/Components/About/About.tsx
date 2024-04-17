import style from "./About.module.css"

interface AboutProps {
    toClose : () => void
}

export const About = (props : AboutProps) => {
    return (
        <div className={style.aboutConteiner}>
            <div className={style.header}>
                <label>Sobre o Projeto</label>
                <button onClick={props.toClose} className={style.closeAbout}>✖</button>
            </div>
          <label>opa isso aqui é um sobre o jogo</label>  
        </div>
    )
}