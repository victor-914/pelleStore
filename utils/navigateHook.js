import { useRouter } from "next/router";

const navigate = (params) => {
  const router = useRouter();
  useEffect(() => {
    router.query.catergory = `${params}`;
    router.push(router);
  }, [router.isReady]);
};

export default navigate;
