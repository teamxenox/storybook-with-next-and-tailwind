import Button from './index';

export default {
    title: "My First Button" 
}

const Template = arguments_ => <Button {...arguments_} />

export const Primary = Template.bind({})

Primary.args ={
    size: "h-10 w-56",
    children: "Primary"
}