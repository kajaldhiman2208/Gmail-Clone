import React from 'react';
import {AppBar,Toolbar,styled, InputBase, Box} from '@mui/material';
import {HelpOutlineOutlined, Menu as MenuIcon,Search, Tune,SettingsOutlined,AppsOutlined,AccountCircleOutlined, AddBoxRounded} from '@mui/icons-material';
import { gmaillogo } from '../constants/constant';
import ProfileSettings from '../ProfileSetting';





const StyledAppBar=styled(AppBar)({
    background:'#F5F5F5',
    boxShadow:'none'
})

const SearchWrapper=styled(Box)({
    background:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
    justifyContent:'space-between',
    display:'flex',
    alignItems:'center',
    padding:'0 20px',
    '& > div':{
        width:'100%',
        padding:'0 10px'
    }

})

const OptionsWrapper=styled(Box)({
  width:'100%',
  display:'flex',
  justifyContent:'end',
  '& > svg':{
    marginLeft:20
  }
})

const Header=({toggleDrawer})=> {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
            <MenuIcon color="action"  onClick={toggleDrawer} />
            <img src={gmaillogo} alt="logo" height="55px" width="100px" style={{marginLeft:15}} />
            <SearchWrapper>
                <Search color="action" />
                <InputBase color="action" 
                placeholder='Search mail'/>
                <Tune color="action"/>
            </SearchWrapper>
            <OptionsWrapper>
            <HelpOutlineOutlined color="action" />
            <SettingsOutlined color="action" />
            <AppsOutlined color="action"/>
            {/* <AccountCircleOutlined color="action"/> */}
            <ProfileSettings/>
            </OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
    </div>
  )
}

export default Header
