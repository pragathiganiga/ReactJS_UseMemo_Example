type TextAreaProps = {
    value: string;
    onChange: (value: string) => void;
  };
  
  const TextArea = ({ value, onChange }: TextAreaProps) => {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-4 w-full h-40 sm:h-52 md:h-64 lg:h-72 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-black"
        placeholder="Type something here..."
      />
    );
  };
  
  export default TextArea;
  