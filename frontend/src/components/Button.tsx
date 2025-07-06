interface ButtonProps {
  title: string;
  onPress?: () => void;
}

export const Button = ({ title, onPress }: ButtonProps): JSX.Element => {
  return (
      <button 
      className="rounded-lg hover:bg-gray-600 active:bg-gray-700 hover:text-white border-2 border-black px-8">
      <p>{title}</p>
    </button>
  )
}