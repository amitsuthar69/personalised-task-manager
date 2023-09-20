export default function DropDownMenu() {
  return (
    <ul className="flex flex-col gap-3 p-4 text-lg text-gray-100 bg-[#3400B3] dark:bg-[#1F1B24] ">
      <li className="dark:hover:text-[#BB86FC]">Profile</li>
      <li className="dark:hover:text-[#BB86FC]">Your Tasks</li>
      <li className="dark:hover:text-[#BB86FC]">Contribute</li>
      <li className="dark:hover:text-[#BB86FC]">Sign In</li>
    </ul>
  );
}
