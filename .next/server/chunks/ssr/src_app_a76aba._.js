module.exports = {

"[project]/src/app/Data/Cart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addProductToCart": (()=>addProductToCart),
    "deleteProductFromCart": (()=>deleteProductFromCart),
    "getCarrito": (()=>getCarrito)
});
// Usamos un Map para mejorar la eficiencia en la búsqueda y actualización de productos.
const cart = new Map();
const addProductToCart = (codeProduct)=>{
    // Verificamos si el producto ya existe en el carrito
    if (cart.has(codeProduct)) {
        // Si ya existe, incrementamos su cantidad
        cart.get(codeProduct).quantity += 1;
    } else {
        // Si no existe, lo agregamos con cantidad 1
        cart.set(codeProduct, {
            code: codeProduct,
            quantity: 1
        });
    }
};
const deleteProductFromCart = (codeProduct)=>{
    // Verificamos si el producto existe en el carrito
    if (cart.has(codeProduct)) {
        const product = cart.get(codeProduct);
        // Si la cantidad es 1, eliminamos el producto
        if (product.quantity === 1) {
            cart.delete(codeProduct);
        } else {
            // Si la cantidad es mayor, decrementamos la cantidad
            product.quantity -= 1;
        }
    }
};
const getCarrito = ()=>{
    // Convertimos el Map a un array de CartItem
    return Array.from(cart.values());
};
}}),
"[project]/src/app/alternateUI/NewProductsContainer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Data$2f$Cart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/Data/Cart.tsx [app-ssr] (ecmascript)"); // Importar las funciones para agregar, eliminar y obtener productos del carrito
"use client";
;
;
;
const NewProductsContainer = ({ products, itemQuantity, setItemQuantity })=>{
    // Función para agregar un producto al carrito
    const handleAddToCart = (productCode)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Data$2f$Cart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addProductToCart"])(productCode); // Llamada a la función para agregar el producto
        setItemQuantity(itemQuantity + 1); // Actualizar la cantidad de artículos en el carrito
    };
    // Función para eliminar un producto del carrito
    const handleRemoveFromCart = (productCode)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Data$2f$Cart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteProductFromCart"])(productCode); // Llamada a la función para eliminar el producto
        setItemQuantity(itemQuantity - 1); // Actualizar la cantidad de artículos en el carrito
    };
    // Usamos un efecto para actualizar la cantidad total de productos en el carrito
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const totalQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Data$2f$Cart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCarrito"])().reduce((sum, product)=>sum + product.quantity, 0);
        setItemQuantity(totalQuantity); // Actualizamos la cantidad total de productos en el carrito
    }, [
        itemQuantity,
        setItemQuantity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Productos"
            }, void 0, false, {
                fileName: "[project]/src/app/alternateUI/NewProductsContainer.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: product.imageUrl,
                            alt: product.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/alternateUI/NewProductsContainer.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/alternateUI/NewProductsContainer.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Precio: $",
                                product.price
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/alternateUI/NewProductsContainer.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleAddToCart(product.code),
                            children: "Agregar al carrito"
                        }, void 0, false, {
                            fileName: "[project]/src/app/alternateUI/NewProductsContainer.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleRemoveFromCart(product.code),
                            children: "Eliminar del carrito"
                        }, void 0, false, {
                            fileName: "[project]/src/app/alternateUI/NewProductsContainer.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, product.id, true, {
                    fileName: "[project]/src/app/alternateUI/NewProductsContainer.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/alternateUI/NewProductsContainer.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = NewProductsContainer;
}}),
"[project]/src/app/styles/UIChangerButton.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "uiChangerButton": "UIChangerButton-module__uMfMGG__uiChangerButton",
});
}}),
"[project]/src/app/Components/UIChangerButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// app/components/UIChangerButton.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/context/ThemeContext.tsx [app-ssr] (ecmascript)"); // Importar el hook del contexto
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$UIChangerButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/styles/UIChangerButton.module.css [app-client] (css module)"); // Importar el módulo CSS
"use client";
;
;
;
const UIChangerButton = ()=>{
    const { toggleUI } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])(); // Función para cambiar la UI
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$UIChangerButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uiChangerButton,
        onClick: toggleUI,
        children: "Cambiar UI"
    }, void 0, false, {
        fileName: "[project]/src/app/Components/UIChangerButton.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = UIChangerButton;
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_app_a76aba._.js.map