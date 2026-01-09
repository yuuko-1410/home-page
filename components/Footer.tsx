import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">产品</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link
                  href="/products/smart-knee"
                  className="hover:text-blue-600 transition-colors"
                >
                  Synrise S5
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">公司</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-600 transition-colors"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  加入我们
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">技术</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link
                  href="/technology"
                  className="hover:text-blue-600 transition-colors"
                >
                  SynchroMind™
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  科研合作
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">联络</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>contact@synrise.com</li>
              <li>400-888-8888</li>
              <li>四川省成都市</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-600">
          <p>© 2025 Synrise 森越成行. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}
