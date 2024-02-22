type Button = {
  name: string;
  bgColor: string;
  textColor: string;
  action: () => void;
}

export default function Button({ name, bgColor, textColor, action }: Button) {
  return (<button className={`bg-${bgColor} text-${textColor} py-4 px-5 mx-2 rounded-3xl font-bold`} onClick={action}>{name}</button>)
}
