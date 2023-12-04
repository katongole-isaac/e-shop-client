/**
 * Show Products in the cart
 *
 */

import ProceedCheckOut from "@/components/cart/proceedCheckout";
import ShoppingCart from "@/components/cart/shoppingCart";
import SideCartCard from "@/components/cart/sidecartCard";
import DashLayout from "@/components/layouts/dashLayout";

export default function CartPage() {
  return (
    <div className="w-full min-h-[90vh] bg-neutral-100 min-w-[1100px]">
      <div className=" m-auto max-w-[1500px]">
        <div className=" py-4 px-2 grid grid-cols-[1fr_300px] gap-6">
          <div className="">
            <ShoppingCart />
          </div>

          {/* sidebar of the cart */}
          <div className="space-y-2">
            <ProceedCheckOut />
            <SideCartCard>
              <a
                href="https://www.dpbolvw.net/click-100934242-15546439"
                target="_top"
              >
                <img
                  src="https://www.awltovhc.com/image-100934242-15546439"
                  width="250"
                  height="250"
                  alt=""
                  border="0"
                />
              </a>
            </SideCartCard>

            <SideCartCard>
              <a
                href="https://www.tkqlhce.com/click-100934242-15582773"
                target="_top"
              >
                <img
                  src="https://www.ftjcfx.com/image-100934242-15582773"
                  width="250"
                  height="250"
                  alt=""
                  border="0"
                />
              </a>
            </SideCartCard>
            <SideCartCard>
              <a
                href="https://www.kqzyfj.com/click-100934242-15269763"
                target="_top"
              >
                <img
                  src="https://www.tqlkg.com/image-100934242-15269763"
                  width="300"
                  height="250"
                  alt="Social Media Manager: grow your reach!"
                  border="0"
                /> 
              </a>
            </SideCartCard>
          </div>
        </div>
      </div>
    </div>
  );
}

CartPage.requireAuth = true;
CartPage.getLayout = (page) => <DashLayout> {page} </DashLayout>;
