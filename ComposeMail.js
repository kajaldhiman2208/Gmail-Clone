import { Dialog, Box, styled, InputBase, TextField, Button } from "@mui/material"
import { Close, DeleteOutline } from "@mui/icons-material"
import {useState} from 'react';
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";


const dialogStyle={
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0'
}

const Header =styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc',
    '& > p':{
        fontSize:14,
        fontWeight:500
    }
})

const Recipientswrapper=styled(Box)({
    display:'flex',
    flexDirection:'column',
    padding:'0 15px ',
    '& >div':{
        fontSize:14,
        borderBottom:'1px solid #f5f5f5',
        marginTop:'10px'
    }
})

const Footer=styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    textAlign:'center'
})

const SendButton=styled(Button)({
    background:'#0b57d0',
    color:'#fff',
    fontWeight:500,
    textTransform:'none',
    borderRadius:'18px',
    width:100
})

const ComposeMail=({openDialog,setOpenDialog})=> {
    const [data,setData]=useState({});
    const sentEmailService=useApi(API_URLS.saveSentEmail);
    const saveDraftService=useApi(API_URLS.saveDraftEmails);

    const config={
        
        Host : "your email",
        Username : process.env.REACT_APP_USERNAME,
        Password : process.env.REACT_APP_PASSWORD,
        Port:2525
        
    }
  


    const closeComposeMail = (e) => {
        e.preventDefault();
        
    const payload={
        to:data.to,
        from:'your email",
        subject:data.subject,
        body:data.body,
        date:new Date(),
        image:'',
        name:'your name',
        starred:false,
        type:'drafts'
    }

    saveDraftService.call(payload);

    if(!saveDraftService.error){
        setOpenDialog(false);
        setData({});
    }else{
        
    }
    };
  const sendMail = (e) => {
    e.preventDefault();

    if(window.Email){
    window.Email.send({
        ...config,
        To : data.to,
        From : "your mail",
        Subject : data.subject,
        Body :data.body
    }).then(
      message => alert(message)
    );
    }

    const payload={
        to:data.to,
        from:'from email',
        subject:data.subject,
        body:data.body,
        date:new Date(),
        image:'',
        name:'your name',
        starred:false,
        type:'sent'
    }

    sentEmailService.call(payload);

    if(!sentEmailService.error){
        setOpenDialog(false);
        setData({});
    }else{
        
    }

        setOpenDialog(false);
    };

    const onValueChnage = (e) =>{
        setData({...data, [e.target.name]:e.target.value})
    }

  return (
    <Dialog
        open={openDialog}
        PaperProps={{sx:dialogStyle}}
    >
        <Header>
        <p>New Message</p>
        <Close fontSize="small" onClick={(e)=> closeComposeMail(e)}></Close>
        </Header>
        <Recipientswrapper>
            <InputBase placeholder="Recipients" name="to" onChange={(e)=>onValueChnage(e)} value={data.to} />
            <InputBase placeholder="Subject" name="subject" onChange={(e)=>onValueChnage(e)}  value={data.subject} />
        </Recipientswrapper>
       <TextField 
        multiline
        rows={20}
        sx={{'& .MuiOutlinedInput-notchedOutline': {border:'none'}}}
        onChange={(e)=>onValueChnage(e)}
        name="body"
       />
        <Footer>
            <SendButton onClick={(e)=> sendMail(e)}>Send</SendButton>
            <DeleteOutline onClick={()=>setOpenDialog(false)} />
        </Footer>
    </Dialog>
  )
}

export default ComposeMail;
