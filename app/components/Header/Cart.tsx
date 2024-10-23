import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import React from "react";

const Cart = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ShoppingCart className="hover:bg-gray-50 m-3"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>Item 1</div>
          <div className="flex gap-2">
            <Minus className="cursor-pointer text-red-500 border-2 border-gray-200" />
            <Plus className="cursor-pointer text-green-500 border-2 border-gray-200" />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuLabel>
          <div>Item 2</div>
          <div className="flex gap-2">
            <Minus className="cursor-pointer text-red-500 border-2 border-gray-200" />
            <Plus className="cursor-pointer text-green-500 border-2 border-gray-200" />
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;
