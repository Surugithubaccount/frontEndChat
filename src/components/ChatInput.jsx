import React, { useState } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';

export default function ChatInput({handleSendMsg}) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmojiPickerHideShow = () =>{
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (event, emoji) => {
        console.log(emoji.emoji);
        let message = msg;
        message += emoji.emoji;
        setMsg(message);
    };

    const sendChat = (event) => {
        event.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setMsg('');
        }
    }

    return (
        <>
        <Container>
            <div className="button_container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
                    {
                        showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/>
                    }
                </div>
            </div>
            <form className="input-container" onSubmit={(e)=>sendChat(e)}>
                <input type="text" placeholder="type your message here" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                <button className="submit">
                    <IoMdSend />
                </button>
            </form>
        </Container>
        </>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding-bottom: 0.3rem;
    padding: 0.2rem;
   
    .button_container{ 
        display: flex;
        align-items: center;
        gap: 1rem;
        color: white;

        .emoji{
            position: relative;
            svg{
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer; 
            }
            .emoji-picker-react{
                position: absolute;
                top: -35px;
                background-color: #080420;
                box-shadow: 0 5px 10px #9a86f3;
                border-color: #9186f3;
                .emoji-scroll-wrapper::-webkit-scrollbar{
                    background-color: #080420;
                    width: 5px;
                    &-thumb{
                        background-color: #9186f3;
                    }
                }
                .emoji-categories{
                    button{
                        filter: contrast(0);
                    }
                }
                .emoji-search{
                    background-color: transparent;
                    border-color: #9186f3;
                }
                .emoji-group: before{
                    background-color: #080420;
                }
            }
        }
    }

    .input-container { 
        width: 90%;
        background-color: #ffffff34;
        border-radius: 2rem; 
        display: flex;
        align-items: center;
        gap: 2rem;

        input {
            width: 90%;
            height: 60%;
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;

            &::selection {
                background-color: #9186f3;
            }

            &:focus {
                outline: none;
            }
        }

        button {
            padding: 0.3rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9a86f3;
            border: none;

            svg {
                font-size: 2rem;
                color: white;
            }
        }
    }
`;
