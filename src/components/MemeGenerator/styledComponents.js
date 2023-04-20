// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
`

export const MemeConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding: 25px 25px;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 90%;
    max-width: 1140px;
  }
`
export const Heading = styled.h1`
  font-family: 'Open Sans';
  color: #35469c;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 15px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    text-align: left;
  }
`
export const FormAndImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const MemeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //   height: 350px;
  height: 300px;
  background-image: url(${props => props.bgImageUrl});
  background-size: cover;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-top: 5px;
    margin-bottom: 20px;
    order: 1;
  }
`
export const Text = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  font-weight: 900;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const Label = styled.label`
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 14px;
  color: #7e858e;
`

export const Input = styled.input`
  background-color: #ffffff;
  font-family: 'Open Sans';
  color: #5a7184;
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`
export const Select = styled.select`
  background-color: #ffffff;
  font-family: 'Open Sans';
  color: #1e293b;
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`
export const Option = styled.option`
  font-size: 14px;
  padding: 10px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  font-family: 'Open Sans';
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  align-self: flex-start;
`
