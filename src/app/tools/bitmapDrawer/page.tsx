"use client";

import BitmapDrawer from "./components/BitmapDrawer"

function BitmapDrawerPage() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-h1 w-fit text-4xl mb-6">Bitmap Drawer</h1>
            <BitmapDrawer />
        </div>
    )
}
export default BitmapDrawerPage