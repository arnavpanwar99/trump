import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import s from './Welcome.module.scss';
import { rules } from './../../strings/index';
import { MdCancel, MdShare } from 'react-icons/md';
import { FaArrowCircleRight, FaCopy } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';

const Welcome = () => {
    const [title, setTitle] = useState(false);
    const [players, setPlayers] = useState(1);
    const [code, setCode] = useState(false);
    const spanRef = useRef(null);

    const renderRules = () => {
        return(
            <div>
                <ul>
                    {
                        rules.map((item, index) => {
                            return(
                                <li style={{fontSize: '1.25rem'}} key={`normal_${index}`}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    const modalStyle = () => {
        if(title){
            return{
                height: '70vh',
            }
        }else{
            return{
                height: 0,
            }
        }
    }

    const savePlayers = (p) => {
        setPlayers(p);
        switch (p) {
            case 2:
                spanRef.current.style.left = '33.3%';
                break;
            case 3:
                spanRef.current.style.left = '66.6%';
                break;
            default:
                spanRef.current.style.left = 0;
                break;
        }
    }

    const selectText = (textArea) => {
        if(isIos()){
            const range = document.createRange();
            range.selectNodeContents(textArea);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 99999999);
        }else{
            textArea.select();
        }
    }

    const createTextArea = (text) => {
        const textArea = document.createElement('textarea');
        textArea.readOnly = true;
        textArea.contentEditable = true;
        textArea.value = text;
        document.body.appendChild(textArea);
        return textArea;
    }

    const copyTo = (textArea) => {
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    const isIos = () => JSON.stringify(navigator.userAgent).includes('iPhone');
    
    const copyToClipboard = (text) => {
        const textArea = createTextArea(text);
        selectText(textArea);
        copyTo(textArea);
    }

    const renderProceedButton = (onClickListener) => {
        return(
            <Link className={s.link} to={onClickListener()}>
                <div className={s.choice_proceed}>
                    <FaArrowCircleRight size={60} color='#35bb92' />
                </div>
            </Link>
        )
    }

    const renderJoinScreeen = () => {
        return(
            <div className={s.container}>
                <input placeholder='Player Name' className={s.container_input} />
                <input placeholder='Game Code' className={s.container_input} />
                {renderProceedButton(() => false)}
            </div>
        )
    }

    const shareData = (code) => {
        const baseURL = 'https://abc.com/';
        const data = {
            url: `${baseURL}game/${String(code)}`,
            text: 'Join me in the most exiciting trump card game. To join simply follow the link .\n',
        }
        navigator.share && navigator.share(data);
    }

    const renderShareOptions = (code) => (
        <div  className={s.share}>
            <div onClick={() =>   copyToClipboard(code)} className={s.share_child}>
                <FaCopy color='#233d4d' size={30} />
            </div>
            <div className={s.share_child} onClick={() => shareData(code)}>
                <MdShare color='#233d4d' size={30} />
            </div>
        </div>
    )

    const renderCreateScreen = () => {
        const code = uuid();
        return(
            <div className={s.container}>
                <input style={{transform: 'translate(0)'}} placeholder='Player Name' className={s.container_input} />
                <p className={s.container_para}>Your game code is <span className={s.test}>{code}</span>.Ask your friends to join with this code.</p>
                {renderShareOptions(code)}
                {renderProceedButton(() => false)}
            </div>
        )
    }

    const renderComputer = () => {
        return(
            <div className={s.choice}>
                <h2>Choose no. of opponents:</h2>
                <div className={s.choice_group}>
                    <span ref={spanRef} className={s.choice_group_void}></span>
                    <div className={s.choice_group_child} onClick={() => savePlayers(1)}>1</div>
                    <div className={s.choice_group_child} onClick={() => savePlayers(2)}>2</div>
                    <div className={s.choice_group_child} onClick={() => savePlayers(3)}>3</div>
                </div>
                {renderProceedButton(() => '/game')}
            </div>
        )
    }



    return(
        <>
            <div className={s.parent}>
                <div className={s.parent_child} onClick={() => setTitle('Create Game')}>Create</div>
                <div className={s.parent_child} onClick={() => setTitle('Enter Game Code')}>Join</div>
                <div className={s.parent_child}>the</div>
            </div>
            <div className={s.bottom}>
                <div className={s.bottom_link} onClick={() => setTitle('Computer')}>VS Computer</div>
                <div className={s.bottom_link} onClick={() => setTitle('Rules')}>Rules</div>
            </div>
            <div style={modalStyle()} className={s.modal}>
                <div className={s.modal_head}>
                    <h1 className={s.modal_head_text}>{title}</h1>
                    <div className={s.modal_head_box} onClick={() => setTitle(false)}>
                        <MdCancel color='#233d4d' size={30} />
                    </div>
                </div>
                {title==='Rules' && renderRules()}
                {title==='Computer' && renderComputer()}
                {title==='Enter Game Code' && renderJoinScreeen()}
                {title==='Create Game' && renderCreateScreen()}
            </div>
        </>
    )
}

export default Welcome;