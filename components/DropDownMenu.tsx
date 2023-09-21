export default function DropDownMenu() {
  return (
    <ul className="flex flex-col gap-3 p-4 text-lg drop-shadow-lg dark:text-gray-100 text-blue-700 bg-blue-50 dark:bg-[#1F1B24] ">
      <li className="bottom-border">Profile</li>
      <li className="bottom-border">Your Tasks</li>
      <li className="bottom-border">Contribute</li>
      <li className="bottom-border">Sign In</li>
    </ul>
  );
}
