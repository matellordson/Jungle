import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const RootLayout = () => (
  <>
    <div className="">
      <Link to="/product" className="[&.active]:font-bold">
        Product
      </Link>
    </div>
    <Outlet />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
