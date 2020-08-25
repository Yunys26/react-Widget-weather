import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../../store/store';
import ButtonSend from '../MainSection/ButtonSend';

@observer
class Modal extends Component {

    render () {
        const props = this.props;
        return (
            <div onClick={store.modalClose} className="modal">
                <div className="modalContent">
                    <div className="modalHeader">
                        <span onClick={store.onClick} className="modalClose">&times;</span>
                        <img className="sadSunImg" src="https://img.icons8.com/clouds/100/000000/sad-sun.png" alt=""/>
                    </div>
                    <div className="modalBody">
                        <p>Удалить <span>{this.props.nameCity}</span> из списка ?</p>
                        <p>Ещё другой текст...</p>
                    </div>
                    <div className="modalFooter">
                        {/* <h3>Футер модального окна</h3> */}
                        <ButtonSend clickButton={props.clickButton} className="buttonDelete" valueButton="Удалить город"/>
                    </div>
                </div>
            </div>
        );
    };
} 
export default Modal;