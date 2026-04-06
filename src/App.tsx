/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Check, 
  Camera, 
  Mic, 
  Plus, 
  Info, 
  ChevronRight, 
  QrCode, 
  ArrowRight, 
  Sparkles,
  Share2,
  MoreHorizontal,
  Phone,
  Timer,
  Coffee,
  Wifi,
  CheckCircle2,
  Settings2,
  Wrench,
  Package,
  RefreshCw,
  Car,
  User
} from 'lucide-react';

// --- Types ---
type Screen = 
  | 'vehicle-selection' 
  | 'vehicle-registration' 
  | 'plate-scanner' 
  | 'service-request' 
  | 'diagnostic-result' 
  | 'queue-status';

// --- Components ---

const TopNav = ({ title, onBack, rightElement }: { title: string; onBack?: () => void; rightElement?: React.ReactNode }) => (
  <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-3xl px-6 py-4 flex items-center justify-between border-b border-outline-variant/10">
    <div className="flex items-center gap-4">
      {onBack && (
        <button onClick={onBack} className="active:scale-95 transition-transform text-on-surface">
          <ArrowLeft className="w-6 h-6" />
        </button>
      )}
      <h1 className="font-headline font-medium text-lg text-on-surface">{title}</h1>
    </div>
    {rightElement || (
      <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container border border-outline-variant/20">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfCrSWnAE1Hhgv4mMvoTZCfJP3CILYekPHQJRb2CmLEDENn1EDkq_U3rNkYkOy4lZAeLEyL9zw43p91XxjOm2i24wyufT93QDl6a5_B8pmTfyoZqsn-2DpF580-15J5WzjyeSZW4vp0sICsxf-AxX1eXW-dekTXtL1ZoBu2Gm3DKz0_omyFbluyBy30Wvq9jfBVoR453AXUp9a6X0YOKhubSe--Cnv15dYhuBkQ2kp98neGExsk5TrZBU5ISOwvWf9P6e3K1f9cm8" 
          alt="User"
          referrerPolicy="no-referrer"
        />
      </div>
    )}
  </nav>
);

const BottomButton = ({ label, onClick, icon: Icon }: { label: string; onClick: () => void; icon?: any }) => (
  <footer className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background to-transparent z-40">
    <button 
      onClick={onClick}
      className="primary-gradient w-full py-5 rounded-full text-white font-headline font-bold text-lg shadow-xl shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
    >
      <span>{label}</span>
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  </footer>
);

// --- Screens ---

const VehicleSelection = ({ onNext, onRegister }: { onNext: () => void; onRegister: () => void }) => {
  const [selected, setSelected] = useState(0);
  const vehicles = [
    { id: 0, plate: '粤B·12345', model: '比亚迪 · 汉 EV', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiHPZ4AfjKGn-2kJXo-RMKMRbZS84HkfgjugPAirInWE1Kcn2pC30bot_SjD_iRv-0xwGYHh_fkU1Xs8m_SUstHsxgqJL18cv6fxJpOM_RrVUdGuyGDAwkzOooFXUkDoa51sKpPIiaPl-UmU8FaQHsbVCC-6yUhruX5E99GvsW5Zv0m6BzQca7FIEl3znfF9vE5VreuFy9ZaJzKx4Bs6sc0n41iXPHZXcsvni35HrhvxUPhRJlPm8b-_cjB2XzDLGXKurBPOSEisU' },
    { id: 1, plate: '粤A·67890', model: '小鹏 P7', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiHPZ4AfjKGn-2kJXo-RMKMRbZS84HkfgjugPAirInWE1Kcn2pC30bot_SjD_iRv-0xwGYHh_fkU1Xs8m_SUstHsxgqJL18cv6fxJpOM_RrVUdGuyGDAwkzOooFXUkDoa51sKpPIiaPl-UmU8FaQHsbVCC-6yUhruX5E99GvsW5Zv0m6BzQca7FIEl3znfF9vE5VreuFy9ZaJzKx4Bs6sc0n41iXPHZXcsvni35HrhvxUPhRJlPm8b-_cjB2XzDLGXKurBPOSEisU' },
  ];

  return (
    <div className="pt-24 px-6 pb-32 max-w-2xl mx-auto">
      <header className="mb-12">
        <h2 className="font-headline font-bold text-3xl mb-3 tracking-tight text-on-surface">欢迎光临，尊贵的车主</h2>
        <p className="font-body text-on-surface-variant text-lg leading-relaxed">请验证您的车辆信息，快速开启智能维保</p>
      </header>

      <div className="bg-surface-container-low rounded-xl p-2 mb-8 flex gap-2">
        <button className="flex-1 py-4 px-6 rounded-lg font-headline font-medium text-center transition-all bg-surface-container-lowest text-primary shadow-sm">历史车辆</button>
        <button onClick={onRegister} className="flex-1 py-4 px-6 rounded-lg font-headline font-medium text-center transition-all text-on-surface-variant hover:bg-surface-bright">车辆登记</button>
      </div>

      <div className="space-y-6">
        {vehicles.map((v) => (
          <div 
            key={v.id}
            onClick={() => setSelected(v.id)}
            className={`bg-surface-container-lowest p-6 rounded-xl border-2 relative overflow-hidden group hover:shadow-xl transition-all duration-500 ${selected === v.id ? 'border-primary/20 ring-2 ring-primary/5' : 'border-outline-variant/15'}`}
          >
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="nev-badge-gradient text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider">NEV</span>
                  <span className="font-headline font-bold text-2xl tracking-tight">{v.plate}</span>
                </div>
                <p className="font-body text-on-surface-variant">{v.model}</p>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${selected === v.id ? 'primary-gradient' : 'border border-outline-variant/30 text-transparent'}`}>
                <Check className="w-4 h-4" />
              </div>
            </div>
            <div className={`relative h-40 w-full transition-opacity ${selected === v.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>
              <img 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700" 
                src={v.img} 
                alt={v.model}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </div>

      <div onClick={onRegister} className="mt-8 flex items-center justify-center gap-2 group cursor-pointer active:opacity-70 transition-opacity">
        <Info className="text-primary w-5 h-5" />
        <span className="font-body text-sm font-medium text-primary tracking-wide">如需绑定新车，请前往车辆登记</span>
      </div>

      <BottomButton label="直接下一步" onClick={onNext} />
    </div>
  );
};

const VehicleRegistration = ({ onBack, onScan, onNext }: { onBack: () => void; onScan: () => void; onNext: () => void }) => {
  return (
    <div className="pt-24 px-6 pb-32 max-w-md mx-auto">
      <header className="mb-8 text-center">
        <h2 className="font-headline text-2xl font-bold tracking-tight mb-1 text-on-surface">欢迎光临，尊贵的车主</h2>
        <p className="text-on-surface-variant font-body text-sm opacity-80">验证您的车辆信息，开启智能维保体验</p>
      </header>

      <div className="bg-surface-container-low rounded-full p-1 flex gap-1 mb-8 shadow-sm">
        <button onClick={onBack} className="flex-1 py-2.5 px-4 rounded-full font-headline font-semibold text-xs transition-all text-outline hover:bg-surface-bright">历史车辆</button>
        <button className="flex-1 py-2.5 px-4 rounded-full font-headline font-semibold text-xs transition-all bg-white text-primary shadow-sm">车辆登记</button>
      </div>

      <div onClick={onScan} className="relative group cursor-pointer mb-6">
        <div className="absolute -inset-0.5 bg-primary-gradient opacity-10 blur rounded-2xl"></div>
        <div className="relative bg-white border border-primary/10 rounded-2xl p-4 flex items-center gap-4 hover:border-primary/40 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
            <Camera className="text-primary w-6 h-6" />
          </div>
          <div className="text-left flex-1">
            <h3 className="font-headline text-sm font-bold text-on-surface">拍行驶证，一键识别 (OCR)</h3>
            <p className="text-[10px] text-outline">系统自动提取核心信息，快捷精准</p>
          </div>
          <ChevronRight className="text-outline/40 w-5 h-5" />
        </div>
      </div>

      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t border-outline-variant/30"></div>
        <span className="flex-shrink mx-4 text-outline text-[10px] font-label uppercase tracking-widest font-semibold">或 手动输入</span>
        <div className="flex-grow border-t border-outline-variant/30"></div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center bg-white rounded-full border border-outline-variant/10 px-4 h-12 shadow-sm">
          <label className="w-20 font-bold text-on-surface-variant/80 shrink-0 text-sm">车牌号码</label>
          <div className="flex-1 flex items-center h-full">
            <div className="flex items-center gap-1 pr-3 border-r border-outline-variant/20 cursor-pointer h-1/2">
              <span className="font-bold text-primary">粤</span>
            </div>
            <input className="flex-1 h-full px-3 bg-transparent border-0 text-sm text-on-surface placeholder:text-outline/40 focus:ring-0 font-body uppercase" placeholder="B12345" type="text" />
          </div>
          <button className="pl-3 text-primary active:opacity-60 border-l border-outline-variant/20">
            <QrCode className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center bg-white rounded-full border border-outline-variant/10 px-4 h-12 shadow-sm">
          <label className="w-20 font-bold text-on-surface-variant/80 shrink-0 text-sm">联系电话</label>
          <input className="flex-1 h-full px-3 bg-transparent border-0 text-sm text-on-surface placeholder:text-outline/40 focus:ring-0 font-body" placeholder="请输入车主手机号码" type="tel" />
        </div>
        <div className="flex items-center bg-white rounded-full border border-outline-variant/10 px-4 h-12 shadow-sm">
          <label className="w-20 font-bold text-on-surface-variant/80 shrink-0 text-sm">车主姓名</label>
          <input className="flex-1 h-full px-3 bg-transparent border-0 text-sm text-on-surface placeholder:text-outline/40 focus:ring-0 font-body" placeholder="请输入您的真实姓名" type="text" />
        </div>
      </div>

      <BottomButton label="立即开启智能服务" onClick={onNext} icon={ArrowRight} />
    </div>
  );
};

const PlateScanner = ({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 h-16 bg-white/80 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="active:scale-95 duration-200 p-2 hover:bg-slate-100/50 rounded-full">
            <ArrowLeft className="w-6 h-6 text-primary" />
          </button>
          <h1 className="font-headline font-semibold tracking-tight text-lg text-slate-900">车牌扫描</h1>
        </div>
      </nav>

      <main className="flex-1 flex flex-col pt-20 pb-40 px-6 items-center justify-between">
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] max-w-sm overflow-hidden bg-slate-900 rounded-lg shadow-xl">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4DNhTQSzvRmbRWleuas1LQi8DX5atHY1pBGGeJUJPSZL_19swB1UGs11GoQgyRzJdI6BoftFgLOdJj3JzFXmPDsV0LttginFEgj2tJhUVMAd59M2bEZLPjiWkXr1Xmc0yDxsxMxmx4oqUdJE8K0rAQCXxtrmpGXX5sGquR_qEwQbHSSruM126vPQRRsrulMvKqam1fpcHnNNhAl0srTPHzyNWBpxG2avkBceo39-DDfBpe2KFSCKJkflnrNg9ZQB2Sh9h4_WbQdI" 
              alt="Scanner"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-8 border-2 border-transparent">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary"></div>
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent absolute top-0 animate-[scan_3s_linear_infinite] shadow-[0_0_15px_#0052ff]"></div>
            </div>
            <div className="absolute inset-0 pointer-events-none border-[32px] border-black/40"></div>
          </div>
          <button className="mt-4 text-primary font-medium text-sm flex items-center gap-1 active:opacity-70 transition-opacity">
            <span>相机异常？点击此处手动录入</span>
          </button>
        </div>

        <div className="w-full bg-surface-container-low p-6 rounded-lg flex flex-col items-center gap-4">
          <div className="relative w-48 h-32">
            <img 
              className="w-full h-full object-contain mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMgZEK0X1J70LdlTVPJoFSq4ejIRkRgB06RYgxl200alephi4ilh2sWOmaBcNxb3vngLSVBoLHIcXXHyZ4lB_IG3Vv883sJmf03cYy58RwMzzbOjrinzjgc9i6M6QBuGkTy9jB9XUFS3THhEDAt_vZRTTFS-0vrttqU8Xn_yQdVKEPSaXIRcYYXCICX86fVdCpB_sY01sxftQ7fcjnSaTs36ypz2n0YdaXiG-IvIKjggeX3_D0N6GvD8SEb2nuXJ9N0Z38Ymv5JiA" 
              alt="Tip"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed text-center">
            <span className="text-primary font-semibold">提示：</span>
            请站在车辆正面将车牌置入扫描框拍摄，避免歪斜导致车牌识别错误！
          </p>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl flex flex-col items-center px-10 pb-10 pt-4 shadow-[0_-12px_40px_rgba(25,28,30,0.06)] rounded-t-[3rem]">
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={onComplete}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-[#003ec7] to-[#0052ff] text-white rounded-full w-20 h-20 -mt-10 shadow-lg shadow-blue-500/30 active:scale-90 duration-300 ease-out"
          >
            <div className="w-10 h-10 rounded-full border-4 border-white"></div>
          </button>
          <span className="text-sm text-slate-500 font-medium">请点击拍照按钮进行车牌扫描</span>
        </div>
      </footer>
    </div>
  );
};

const ServiceRequest = ({ onNext }: { onNext: () => void }) => {
  const chips = ['首次保养', '常规保养', '漆面钣喷', '轮胎异响', '空调异味', '续航检测'];
  const [selectedChip, setSelectedChip] = useState(0);
  const [text, setText] = useState('');
  const [isWashSelected, setIsWashSelected] = useState(true);

  return (
    <div className="pt-24 px-6 pb-32 max-w-2xl mx-auto space-y-8">
      <section className="space-y-4">
        <h2 className="font-headline font-semibold text-on-surface text-lg px-2">常见维保项</h2>
        <div className="flex flex-wrap gap-3">
          {chips.map((c, i) => (
            <button 
              key={c}
              onClick={() => setSelectedChip(i)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all border flex items-center gap-1.5 ${selectedChip === i ? 'bg-secondary-fixed text-on-secondary-fixed border-transparent shadow-sm' : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant/30 hover:bg-surface-container-low'}`}
            >
              {selectedChip === i && <Check className="w-3.5 h-3.5" />}
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_0_rgba(25,28,30,0.06)] overflow-hidden relative">
        <div className="p-6 space-y-6">
          <div className="relative">
            <textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-surface-container-low border-none rounded-lg p-5 text-on-surface placeholder:text-outline h-40 focus:ring-2 focus:ring-primary/20 resize-none font-body leading-relaxed" 
              placeholder="描述您的问题或所需服务 (例如：我要做两万公里保养 / 空调不制冷)..."
            />
            {text.length > 0 && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute bottom-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <Check className="w-4 h-4" />
              </motion.div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center py-8 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "easeOut"
                  }}
                  className="absolute w-20 h-20 rounded-full bg-primary/20"
                />
              ))}
            </div>
            <motion.button 
              whileTap={{ scale: 0.92 }}
              className="relative z-10 w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white shadow-xl shadow-primary/30 transition-transform"
            >
              <Mic className="w-10 h-10 fill-current" />
            </motion.button>
            <p className="mt-6 text-primary font-semibold text-sm tracking-wide">按住说话</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-headline font-semibold text-on-surface text-lg px-2">附件资料</h2>
        <div className="flex gap-4">
          <button className="w-24 h-24 rounded-lg bg-surface-container-low flex flex-col items-center justify-center text-outline border-2 border-dashed border-outline-variant/30 hover:bg-surface-container-high transition-colors">
            <Camera className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-medium">照片/视频</span>
          </button>
          <div className="flex-1 rounded-lg bg-surface-container-low/50 p-4 flex items-center italic text-outline text-xs">
            上传故障部位的照片或视频，有助于技师更准确地评估方案。
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-headline font-semibold text-on-surface px-2">可用优惠推荐</h2>
        <div className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => setIsWashSelected(!isWashSelected)}
            className={`relative overflow-hidden p-4 rounded-xl flex items-center gap-4 border transition-all ${isWashSelected ? 'bg-primary/5 border-primary/20' : 'bg-surface-container-lowest border-outline-variant/10'}`}
          >
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${isWashSelected ? 'bg-primary/10' : 'bg-surface-container-low'}`}>
              <Car className={`${isWashSelected ? 'text-primary' : 'text-outline'} w-6 h-6`} />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-[15px]">全车精选洗车服务</h4>
              <p className={`text-xs font-medium ${isWashSelected ? 'text-primary' : 'text-outline'}`}>免费赠送</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] ${isWashSelected ? 'text-primary' : 'text-outline'}`}>
                {isWashSelected ? '已选择' : '未选择'}
              </span>
              {isWashSelected ? (
                <CheckCircle2 className="text-primary w-5 h-5 fill-current" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-outline-variant" />
              )}
            </div>
          </button>
        </div>
      </section>

      <BottomButton label="生成智能维修方案" onClick={onNext} icon={Sparkles} />
    </div>
  );
};

const DiagnosticResult = ({ onNext }: { onNext: () => void }) => {
  const [isWashSelected, setIsWashSelected] = useState(true);

  return (
    <div className="pt-24 px-6 pb-40 max-w-2xl mx-auto space-y-8">
      <section className="relative overflow-hidden bg-primary/5 rounded-xl p-6 border border-primary/10">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Settings2 className="text-primary w-6 h-6" />
          </div>
          <div className="space-y-2">
            <p className="text-on-surface leading-relaxed text-[15px]">
              系统基于您的描述<span className="font-semibold text-primary">【空调不制冷】</span>，匹配到以下服务方案。数据已同步至内部 BSS 服务系统。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-headline font-bold text-on-surface">推荐服务方案</h2>
          <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-medium rounded-full">AI 智能匹配</span>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-6 space-y-8 border border-outline-variant/15">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="text-primary w-5 h-5" />
                <h3 className="text-[15px] font-semibold text-on-surface">项目工时明细</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 bg-surface-container-low px-4 rounded-lg">
                  <span className="text-sm font-medium">空调管路清洗</span>
                  <span className="text-xs text-outline">专业深度处理</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-surface-container-low px-4 rounded-lg">
                  <span className="text-sm font-medium">冷凝器表面深度除垢</span>
                  <span className="text-xs text-outline">提升制冷效率</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="text-primary w-5 h-5" />
                <h3 className="text-[15px] font-semibold text-on-surface">备件材料明细</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 bg-surface-container-low px-4 rounded-lg">
                  <span className="text-sm font-medium">高效率 PM2.5 复合滤芯</span>
                  <span className="text-xs text-outline">x1 件</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-surface-container-low px-4 rounded-lg">
                  <span className="text-sm font-medium">抑菌型空调系统清洗剂</span>
                  <span className="text-xs text-outline">x1 瓶</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-dashed border-outline-variant/30 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-outline mb-1">预计耗时</span>
              <span className="text-lg font-bold text-on-surface">45 分钟</span>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant/20"></div>
            <div className="text-right">
              <span className="text-xs text-outline mb-1">预估总价</span>
              <div className="flex items-baseline justify-end gap-1">
                <span className="text-sm font-medium text-primary">¥</span>
                <span className="text-3xl font-headline font-bold text-primary">230</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-headline font-semibold text-on-surface px-2">可用优惠推荐</h2>
        <div className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => setIsWashSelected(!isWashSelected)}
            className={`relative overflow-hidden p-4 rounded-xl flex items-center gap-4 border transition-all ${isWashSelected ? 'bg-primary/5 border-primary/20' : 'bg-surface-container-lowest border-outline-variant/10'}`}
          >
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${isWashSelected ? 'bg-primary/10' : 'bg-surface-container-low'}`}>
              <Car className={`${isWashSelected ? 'text-primary' : 'text-outline'} w-6 h-6`} />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-[15px]">全车精选洗车服务</h4>
              <p className={`text-xs font-medium ${isWashSelected ? 'text-primary' : 'text-outline'}`}>免费赠送</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] ${isWashSelected ? 'text-primary' : 'text-outline'}`}>
                {isWashSelected ? '已选择' : '未选择'}
              </span>
              {isWashSelected ? (
                <CheckCircle2 className="text-primary w-5 h-5 fill-current" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-outline-variant" />
              )}
            </div>
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-headline font-bold text-on-surface">送修信息填写</h2>
        <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-on-surface-variant flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>送修人姓名</span>
            </label>
            <input className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 text-[15px] focus:ring-2 focus:ring-primary/20 placeholder:text-outline/60" placeholder="请输入送修人姓名" type="text" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-on-surface-variant flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>手机号</span>
            </label>
            <input className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 text-[15px] focus:ring-2 focus:ring-primary/20 placeholder:text-outline/60" placeholder="请输入联系电话" type="tel" />
          </div>
        </div>
      </section>

      <BottomButton label="确认方案并取号" onClick={onNext} icon={CheckCircle2} />
    </div>
  );
};

const QueueStatus = () => {
  return (
    <div className="pt-24 px-6 pb-12 max-w-2xl mx-auto space-y-8">
      <section className="relative overflow-hidden bg-primary rounded-xl p-8 text-on-primary shadow-xl">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="text-xs font-medium tracking-[0.2em] opacity-80 mb-2 font-headline uppercase">Current Queue Number</span>
          <h2 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter mb-4">A015</h2>
          <div className="bg-white/10 glass-effect px-6 py-3 rounded-full flex items-center gap-2">
            <Timer className="w-4 h-4 fill-current" />
            <p className="text-sm font-medium">前面还有 2 人等待，预计需 10 分钟</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-4 gap-2 px-2">
        <div className="h-1.5 rounded-full bg-primary"></div>
        <div className="h-1.5 rounded-full bg-primary/40 animate-pulse"></div>
        <div className="h-1.5 rounded-full bg-surface-variant"></div>
        <div className="h-1.5 rounded-full bg-surface-variant"></div>
      </div>

      <section className="bg-surface-container-lowest rounded-lg p-6 shadow-sm flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <img 
              className="w-16 h-16 rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugEDxI7bZzXhqhKpvW6h8q5RW_2shYQw6ny_SNDw4jqezh-Cq7RLQTKFBChXQ-E3TioKeH9LwPX-KcStD4vB8uzSgIstB-NDe4s6LZNp83JYcUP8z_gUE9NODsugSXu1XIizv1jSyFnuPJccA0CMirfLt2ikJU3FYUDlASjK6MoMmdGs8alCJM_A4uzYgEsCy_b4SzjmR_9jJrM2o6qyg_Aq5lNfiWDPcfu6ajjxeS7s269Voav4wVY5jCkHwSIBqYtFj08jBjl_Q" 
              alt="Advisor"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="flex items-center whitespace-nowrap gap-2 mb-0.5">
              <h3 className="text-lg font-bold text-on-surface">张顾问</h3>
              <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] px-2 py-0.5 rounded-full font-bold">专属服务</span>
              <button className="flex items-center gap-1 text-primary text-[10px] font-bold active:opacity-60 transition-opacity ml-auto">
                <RefreshCw className="w-3 h-3" />
                <span>更换顾问</span>
              </button>
            </div>
            <p className="text-on-surface-variant text-sm">您的专属服务顾问</p>
          </div>
          <button className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary active:scale-90 transition-all">
            <Phone className="w-5 h-5" />
          </button>
        </div>

        {/* Consultant Selection */}
        <div>
          <p className="text-[10px] text-on-surface-variant font-bold mb-3 tracking-wider uppercase">可选服务顾问</p>
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {[
              { name: '张顾问', status: 'online', active: true },
              { name: '李顾问', status: 'busy', active: false },
              { name: '王顾问', status: 'online', active: false },
            ].map((c, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 flex-shrink-0 ${!c.active ? 'opacity-60' : ''}`}>
                <div className="relative">
                  <img 
                    className={`w-12 h-12 rounded-full border-2 ${c.active ? 'border-primary p-0.5' : 'grayscale'}`}
                    src="https://lh3.googleusercontent.com/aida/ADBb0ugEDxI7bZzXhqhKpvW6h8q5RW_2shYQw6ny_SNDw4jqezh-Cq7RLQTKFBChXQ-E3TioKeH9LwPX-KcStD4vB8uzSgIstB-NDe4s6LZNp83JYcUP8z_gUE9NODsugSXu1XIizv1jSyFnuPJccA0CMirfLt2ikJU3FYUDlASjK6MoMmdGs8alCJM_A4uzYgEsCy_b4SzjmR_9jJrM2o6qyg_Aq5lNfiWDPcfu6ajjxeS7s269Voav4wVY5jCkHwSIBqYtFj08jBjl_Q" 
                    alt={c.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-2 border-white rounded-full ${c.status === 'online' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                </div>
                <span className={`text-[10px] ${c.active ? 'font-bold text-primary' : 'font-medium text-on-surface'}`}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-surface-container-low rounded-lg p-4">
          <p className="text-sm leading-relaxed text-on-surface-variant">
            您的工单已生成，请在客休区享用茶点，张顾问将携带接车 PAD 主动与您联系。
          </p>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-container-lowest rounded-lg p-5 flex flex-col justify-between aspect-square">
          <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
            <Coffee className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm">尊享茶歇</h4>
            <p className="text-xs text-on-surface-variant mt-1">2楼客休区为您准备了当季饮品</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-lg p-5 flex flex-col justify-between aspect-square">
          <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
            <Wifi className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm">高速网络</h4>
            <p className="text-xs text-on-surface-variant mt-1">连接 NEV_Guest 畅享 5G 体验</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 pt-4">
        <button className="w-full py-4 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-bold active:scale-95 transition-all">
          修改预约或取消
        </button>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('vehicle-selection');

  const renderScreen = () => {
    switch (screen) {
      case 'vehicle-selection':
        return (
          <VehicleSelection 
            onNext={() => setScreen('service-request')} 
            onRegister={() => setScreen('vehicle-registration')} 
          />
        );
      case 'vehicle-registration':
        return (
          <VehicleRegistration 
            onBack={() => setScreen('vehicle-selection')} 
            onScan={() => setScreen('plate-scanner')}
            onNext={() => setScreen('service-request')}
          />
        );
      case 'plate-scanner':
        return (
          <PlateScanner 
            onBack={() => setScreen('vehicle-registration')} 
            onComplete={() => setScreen('vehicle-registration')}
          />
        );
      case 'service-request':
        return <ServiceRequest onNext={() => setScreen('diagnostic-result')} />;
      case 'diagnostic-result':
        return <DiagnosticResult onNext={() => setScreen('queue-status')} />;
      case 'queue-status':
        return <QueueStatus />;
      default:
        return <VehicleSelection onNext={() => setScreen('service-request')} onRegister={() => setScreen('vehicle-registration')} />;
    }
  };

  const getTitle = () => {
    switch (screen) {
      case 'vehicle-selection': return '车辆服务';
      case 'vehicle-registration': return '车辆登记';
      case 'plate-scanner': return '车牌扫描';
      case 'service-request': return '粤B·12345';
      case 'diagnostic-result': return '智能诊断方案';
      case 'queue-status': return '排队状态';
      default: return '车辆服务';
    }
  };

  const showNav = screen !== 'plate-scanner';

  return (
    <div className="min-h-screen bg-surface">
      {showNav && (
        <TopNav 
          title={getTitle()} 
          onBack={screen !== 'vehicle-selection' ? () => {
            if (screen === 'service-request') setScreen('vehicle-selection');
            else if (screen === 'diagnostic-result') setScreen('service-request');
            else if (screen === 'queue-status') setScreen('diagnostic-result');
            else if (screen === 'vehicle-registration') setScreen('vehicle-selection');
          } : undefined}
          rightElement={screen === 'queue-status' ? (
            <div className="flex gap-4">
              <Share2 className="w-6 h-6 text-on-surface" />
              <MoreHorizontal className="w-6 h-6 text-on-surface" />
            </div>
          ) : undefined}
        />
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
