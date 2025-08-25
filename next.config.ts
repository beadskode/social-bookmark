import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // 등록된 이미지 컴포넌트만 사용할 수 있고, 그 외 이미지는 img 태그 사용해야 함.
    remotePatterns: [
      { hostname: '*.googleusercontent.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'phinf.pstatic.net' },
      { hostname: '*.kakaocdn.net' },
    ],
  },
};

export default nextConfig;
