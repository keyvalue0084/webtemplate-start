import React, { Component } from 'react';
import LeftSideMenu from 'components/LeftSideMenu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LeftSiddMenuActions } from 'store/actionCreators';

class LeftSideMenuContainer extends Component{

    //메뉴 이름 수정
    handleChange =(e)=>{
        
    }
    //메뉴 추가
    handleInsert = ()=>{

    }

    //메뉴 비활성화?
    handleToggle=(id)=>{

    }

    //메뉴 삭제
    handleRemove =(id)=>{

    }

    render(){
        const {handleChange,handleInsert,handleRemove,handleToggle}=this;
        
        return (
            <LeftSideMenu>

            </LeftSideMenu>
        )
    }
}

export default connect(
    ({ menu }) => ({    
      
      menus: menu.menus
    })
  )(LeftSideMenuContainer);