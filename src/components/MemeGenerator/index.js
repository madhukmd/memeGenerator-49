import {Component} from 'react'
import {
  AppContainer,
  MemeConatiner,
  Heading,
  FormAndImgContainer,
  MemeImageContainer,
  Text,
  FormContainer,
  Label,
  Input,
  Select,
  Option,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    bgImageInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeTextIdInput: fontSizesOptionsList[0].optionId,
    bgImgUrl: '',
    topText: '',
    bottomText: '',
    activeTextId: '',
  }

  onChangeBg = event => {
    this.setState({bgImageInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({activeTextIdInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      bgImageInput,
      topTextInput,
      bottomTextInput,
      activeTextIdInput,
    } = this.state
    this.setState({
      bgImgUrl: bgImageInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeTextId: activeTextIdInput,
    })
  }

  renderFrom = () => {
    const {
      bgImageInput,
      topTextInput,
      bottomTextInput,
      activeTextIdInput,
    } = this.state
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <Label htmlFor="bgImageUrl">Image URL</Label>
        <Input
          type="text"
          id="bgImageUrl"
          value={bgImageInput}
          placeholder="Enter the Image URL"
          onChange={this.onChangeBg}
        />
        <Label htmlFor="topText">Top Text</Label>
        <Input
          type="text"
          id="topText"
          value={topTextInput}
          placeholder="Enter the Top Text"
          onChange={this.onChangeTopText}
        />
        <Label htmlFor="bottomText">Bottom Text</Label>
        <Input
          type="text"
          id="bottomText"
          value={bottomTextInput}
          placeholder="Enter the Bottom Text"
          onChange={this.onChangeBottomText}
        />
        <Label htmlFor="select">Font Size</Label>
        <Select
          id="select"
          value={activeTextIdInput}
          onChange={this.onChangeFontSize}
        >
          {fontSizesOptionsList.map(eachItem => (
            <Option key={eachItem.optionId} value={eachItem.optionId}>
              {eachItem.displayText}
            </Option>
          ))}
        </Select>
        <Button type="submit">Generate</Button>
      </FormContainer>
    )
  }

  render() {
    const {bgImgUrl, topText, bottomText, activeTextId} = this.state

    return (
      <AppContainer>
        <MemeConatiner>
          <Heading>Meme Generator</Heading>
          <FormAndImgContainer>
            <MemeImageContainer data-testid="meme" bgImageUrl={bgImgUrl}>
              <Text fontSize={activeTextId}>{topText}</Text>
              <Text fontSize={activeTextId}>{bottomText}</Text>
            </MemeImageContainer>
            {this.renderFrom()}
          </FormAndImgContainer>
        </MemeConatiner>
      </AppContainer>
    )
  }
}
export default MemeGenerator
